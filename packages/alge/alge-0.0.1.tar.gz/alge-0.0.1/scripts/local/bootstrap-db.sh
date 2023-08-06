#!/usr/bin/env bash

set -eo pipefail

PROJECT_NAME=alge

echo
echo " --- The database will be available locally in db/ folder --- "
echo

source activate ${PROJECT_NAME}
export ALGE_LOCAL_RUN=1
export ALLOWED_HOSTS=localhost

printf yes | python manage.py reset_db
python manage.py makemigrations app
python manage.py migrate app
python manage.py migrate
python manage.py createsuperuser

echo
echo " --- The setup of the database is done --- "