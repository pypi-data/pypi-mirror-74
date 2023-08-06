#!/usr/bin/env bash

set -eo pipefail

PROJECT_NAME=alge

echo
echo " --- Please, browser http://localhost:8000 --- "
echo

source activate ${PROJECT_NAME}
export ALLOWED_HOSTS=localhost,127.0.0.1
export ALGE_LOCAL_RUN=1
#gunicorn alge.wsgi
python manage.py runserver
