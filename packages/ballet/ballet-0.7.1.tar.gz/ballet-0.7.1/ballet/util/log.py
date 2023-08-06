import logging
from typing import Union

import ballet

SIMPLE_LOG_FORMAT = r'%(asctime)s %(levelname)s - %(message)s'
DETAIL_LOG_FORMAT = r'[%(asctime)s] {%(name)s: %(filename)s:%(lineno)d} %(levelname)s - %(message)s'  # noqa E501

logger = logging.getLogger(ballet.__name__)
_handler = None


def enable(logger: logging.Logger = logger,
           level: Union[str, int] = logging.INFO,
           format: str = DETAIL_LOG_FORMAT,
           echo: bool = True):
    """Enable simple console logging for this module

    Args:
        logger: logger to enable. Defaults to ballet logger.
        level: logging level, either as string (``"INFO"``) or as int
            (``logging.INFO`` or ``20``). Defaults to 'INFO'.
        format : logging format. Defaults to ballet.util.log.DETAIL_LOG_FORMAT.
        echo: Whether to log a message at the configured log level to
            confirm that logging is enable. Defaults to True.
    """
    global _handler
    if _handler is None:
        _handler = logging.StreamHandler()
        formatter = logging.Formatter(format)
        _handler.setFormatter(formatter)

    levelName = logging.getLevelName(level)

    logger.setLevel(levelName)
    _handler.setLevel(levelName)

    if _handler not in logger.handlers:
        logger.addHandler(_handler)

    if echo:
        logger.log(
            levelName, 'Logging enabled at level {name}.'.format(
                name=levelName))


class LevelFilter:
    """Logging filter for log records at an exact level

    Args:
        level: numeric logging level to filter

    Example usage:

        >>> debugFilter = LevelFilter(logging.DEBUG)
        >>> logger.addFilter(debugFilter)
    """

    def __init__(self, level: int):
        self.__level = level

    def filter(self, logRecord: logging.LogRecord) -> bool:
        return logRecord.levelno == self.__level


class LoggingContext:
    """Logging context manager

    Configure the given logger to emit messages at and above the configured
    logging level and using the configured logging handler. Useful to
    temporarily set a lower (or higher log level) or to temporarily add a
    local handler. After the context exits, the original state of the logger
    will be restored.

    Args:
        logger: logger
        level: string or numeric logging level
        handler: log handler if not is already configured
        close: whether to close the handler after context exits.
            Defaults to True.

    Example usage:

        >>> with LoggingContext(logger, level='DEBUG'):
        ...     logger.debug('some message')

    Source: <https://docs.python.org/3/howto/logging-cookbook.html#using-a-context-manager-for-selective-logging>
    """  # noqa E501

    def __init__(self,
                 logger: logging.Logger,
                 level: Union[str, int] = None,
                 handler: logging.Handler = None,
                 close: bool = True):
        self.logger = logger
        self.level = level
        self.handler = handler
        self.close = close

    def __enter__(self):
        if self.level is not None:
            self.old_level = self.logger.level
            self.logger.setLevel(self.level)
        if self.handler is not None:
            self.logger.addHandler(self.handler)

    def __exit__(self, et, ev, tb):
        if self.level is not None:
            self.logger.setLevel(self.old_level)
        if self.handler is not None:
            self.logger.removeHandler(self.handler)
        if self.handler and self.close:
            self.handler.close()
        return None
