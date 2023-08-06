# Logutil

(Extremely) easy initialization for `logging` and `loguru`

## Why

This packages makes initialization of `logging` and `loguru` with stream, file, sentry and pushover handlers (extremely) easy.

## Installation

- Logging only: `pip install logutil`
- ... + loguru: `pip install logutil[loguru]`
- ... + notifiers/sentry: `pip install logutil[notifiers]`
- ... + loguru + notifiers/sentry: `pip install logutil[all]`

## Examples

```python
# standard python logging
from logutil import init_logging, get_logging_logger
init_logging('sub1')
logger = get_logging_logger('sub1')
logger.info('Test INFO message (logging)')
logger.warning('Test WARNING message (logging)')
```

```python
# loguru
from logutil import init_loguru, get_loguru_logger
init_loguru()
logger = get_loguru_logger()
logger.info('Test INFO message (loguru)')
logger.warning('Test WARNING message (loguru)')
```
