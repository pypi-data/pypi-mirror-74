#!/usr/bin/env bash

source $(dirname "$0")/.secrets.sh
export ALGE_HOST=/cloudsql/${ALGE_APP}:${ALGE_REGION}1:${PROJECT_NAME}-db-${ALGE_VERSION}

conda env list | grep ${PROJECT_NAME}
if [ $? -ne 0 ]; then
    echo
    make install
fi

# STATIC FILES
source activate ${PROJECT_NAME}
gsutil mb gs://$ALGE_APP_STATIC_FILES_BUCKET
gsutil defacl set public-read gs://$ALGE_APP_STATIC_FILES_BUCKET

python manage.py collectstatic
gsutil rsync -R static/ gs://$ALGE_APP_STATIC_FILES_BUCKET/static

# DEPLOY app
gcloud app deploy $(dirname "$0")/../../app.yml
