'''Use this for development'''

from .base import *
DEBUG = True
WSGI_APPLICATION = 'config.wsgi.dev.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    
}


ALLOWED_HOSTS = ["*"]



STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
# ALLOWED_HOSTS = ["tej-todo-backend.herokuapp.com"]