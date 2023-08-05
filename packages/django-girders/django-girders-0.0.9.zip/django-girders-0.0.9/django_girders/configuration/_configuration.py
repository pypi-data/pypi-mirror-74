from configurations import values

from ._base import ComposedConfiguration
from ._celery import CeleryMixin
from ._cors import CorsMixin
from ._database import DatabaseMixin
from ._debug import DebugMixin
from ._django import DjangoMixin
from ._email import EmailMixin
from ._extensions import ExtensionsMixin
from ._filter import FilterMixin
from ._logging import LoggingMixin
from ._rest_framework import RestFrameworkMixin
from ._static import WhitenoiseStaticFileMixin
from ._storage import MinioStorageMixin, S3StorageMixin


# Subclasses are loaded in last to first ordering
class _BaseConfiguration(
    ExtensionsMixin,
    CeleryMixin,
    RestFrameworkMixin,
    FilterMixin,
    # CorsMixin must be loaded after WhitenoiseStaticFileMixin
    CorsMixin,
    WhitenoiseStaticFileMixin,
    DatabaseMixin,
    LoggingMixin,
    # DjangoMixin should be loaded first
    DjangoMixin,
    ComposedConfiguration,
):
    pass


class DevelopmentBaseConfiguration(DebugMixin, MinioStorageMixin, _BaseConfiguration):
    DEBUG = True
    SECRET_KEY = 'insecuresecret'
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
    DJANGO_DEFAULT_FROM_EMAIL = 'webmaster@localhost'
    ALLOWED_HOSTS = values.ListValue(['localhost', '127.0.0.1'])
    CORS_ORIGIN_REGEX_WHITELIST = values.ListValue(
        [r'^https?://localhost:\d+$', r'^https?://127\.0\.0\.1:\d+$']
    )

    # INTERNAL_IPS does not work properly when this is run within Docker, since the bridge
    # sends requests from the host machine via a dedicated IP address
    INTERNAL_IPS = ['127.0.0.1']

    # Setting this allows MinIO to work through network namespace partitions
    # (e.g. when running within Docker Compose)
    MINIO_STORAGE_MEDIA_URL = values.Value(None)


class ProductionBaseConfiguration(EmailMixin, S3StorageMixin, _BaseConfiguration):
    pass


class HerokuProductionBaseConfiguration(ProductionBaseConfiguration):
    # Use different env var names (with no DJANGO_ prefix) for services that Heroku auto-injects
    DATABASES = values.DatabaseURLValue(
        environ_name='DATABASE_URL',
        environ_prefix=None,
        environ_required=True,
        engine='django.db.backends.postgresql',
        conn_max_age=600,
        ssl_require=True,
    )
    CELERY_BROKER_URL = values.Value(
        environ_name='CLOUDAMQP_URL', environ_prefix=None, environ_required=True
    )
