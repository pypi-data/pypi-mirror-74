"""
Decorators and utilities for prefixing exception stack traces while obscuring
the exception message itself.
"""


import functools
import io
from traceback import TracebackException
from typing import Callable
import sys
import re


PREFIX = "SystemLog:"
SCRUB_MESSAGE = "**Exception message scrubbed**"


def scrub_exception_traceback(
    exception: TracebackException,
    scrub_message: str = SCRUB_MESSAGE,
    allow_list: list = [],
) -> TracebackException:
    """
    Scrub exception messages from a `TracebackException` object. The messages
    will be replaced with `exceptions.SCRUB_MESSAGE`.
    """
    if not is_exception_allowed(exception, allow_list):
        exception._str = scrub_message
    if exception.__cause__:
        exception.__cause__ = scrub_exception_traceback(
            exception.__cause__, scrub_message, allow_list
        )
    if exception.__context__:
        exception.__context__ = scrub_exception_traceback(
            exception.__context__, scrub_message, allow_list
        )
    return exception


def is_exception_allowed(exception: TracebackException, allow_list: list) -> bool:
    """
    Check if message is allowed
    Args:
        exception (TracebackException): the exception to test
        allow_list (list): list of regex expressions. If any expression matches
            the exception name or message, it will be considered allowed.
    Returns:
        bool: True if message is allowed, False otherwise.
    """
    # empty list means all messages are allowed
    for expr in allow_list:
        if re.search(expr, exception._str, re.IGNORECASE):
            return True
        if re.search(expr, exception.exc_type.__name__, re.IGNORECASE):
            return True
    return False


def print_prefixed_stack_trace(
    file: io.TextIOBase = sys.stderr,
    prefix: str = PREFIX,
    scrub_message: str = SCRUB_MESSAGE,
    keep_message: bool = False,
    allow_list: list = [],
) -> None:
    """
    Print the current exception and stack trace to `file` (usually client
    standard error), prefixing the stack trace with `prefix`.
    Args:
        keep_message (bool): if True, don't scrub message. If false, scrub (unless
            allowed).
        allow_list (list): exception allow_list. Ignored if keep_message is True. If
            empty all messages will be srubbed.
    """
    exception = TracebackException(*sys.exc_info())
    if keep_message:
        scrubbed_exception = exception
    else:
        scrubbed_exception = scrub_exception_traceback(
            exception, scrub_message, allow_list
        )
    traceback = list(scrubbed_exception.format())
    for execution in traceback:
        if "return function(*func_args, **func_kwargs)" in execution:
            # Do not show the stack trace for our decorator.
            continue
        lines = execution.splitlines()
        for line in lines:
            print(f"{prefix} {line}", file=file)


def prefix_stack_trace(
    file: io.TextIOBase = sys.stderr,
    disable: bool = sys.flags.debug,
    prefix: str = PREFIX,
    scrub_message: str = SCRUB_MESSAGE,
    keep_message: bool = False,
    allow_list: list = [],
) -> Callable:
    """
    Decorator which wraps the decorated function and prints the stack trace of
    exceptions which occur, prefixed with `prefix` and with exception messages
    scrubbed (replaced with `scrub_message`). To use this, just add
    `@prefix_stack_trace()` above your function definition, e.g.

        @prefix_stack_trace()
        def foo(x):
            pass
    """

    def decorator(function: Callable) -> Callable:
        """
        Create a decorator to catch, modify, and log an exception with its
        stack trace. Follows:
        https://www.blog.pythonlibrary.org/2016/06/09/python-how-to-create-an-exception-logging-decorator/
        """

        @functools.wraps(function)
        def wrapper(*func_args, **func_kwargs):
            """
            Create a wrapper which catches exceptions thrown by `function`,
            scrub exception messages, and logs the prefixed stack trace.
            """
            try:
                return function(*func_args, **func_kwargs)
            except BaseException:
                print_prefixed_stack_trace(
                    file, prefix, scrub_message, keep_message, allow_list
                )
                raise

        return function if disable else wrapper

    return decorator
