import logging
from logging import DEBUG
from logging.config import dictConfig
from pathlib import Path

logging.getLogger("requests").setLevel(logging.WARNING)
logging.getLogger("urllib3").setLevel(logging.WARNING)
logging.getLogger("git").setLevel(logging.WARNING)
logging.getLogger("pydriller").setLevel(logging.WARNING)
logging.getLogger("amqp").setLevel(logging.WARNING)
logging.getLogger("botocore").setLevel(logging.WARNING)
logging.getLogger("boto3").setLevel(logging.WARNING)
logging.getLogger("s3transfer").setLevel(logging.WARNING)
logging.getLogger("celery").setLevel(logging.ERROR)


def configure_logger(filename: Path, level=logging.getLevelName(DEBUG)):
    filename.parent.mkdir(exist_ok=True)
    dictConfig({
        'version': 1,
        'disable_existing_loggers': False,
        'formatters': {
            'standard': {
                'format': '%(asctime)s [%(levelname)s] %(name)s: %(message)s'
            },
        },
        'handlers': {
            'console': {
                'level': level,
                'formatter': 'standard',
                'class': 'logging.StreamHandler',
            },
            'file': {
                'level': level,
                'formatter': 'standard',
                'class': 'logging.FileHandler',
                'filename': filename
            },
        },
        'loggers': {
            '': {
                'handlers': ['console', 'file'],
                'level': level,
                'propagate': True
            }
        }
    })
