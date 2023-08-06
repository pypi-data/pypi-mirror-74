#!/usr/bin/env bash

PROJECT_NAME="alge"
GC_VERSION="Google Cloud SDK 290.0.0; bq 2.0.56; core 2020.04.21; gsutil 4.49"

echo " --- Dependencies --- "
echo "${GC_VERSION} or +"

echo
echo " --- Your versions --- "
gcloud --version

echo
source $(dirname "$0")/.secrets.sh
export ALGE_HOST=127.0.0.1

echo
echo "--- If it is your first time, run: ---"
echo "    1) gcloud auth login"
echo "    2) gcloud config set project ${ALGE_APP}"

# DB schema
export ALGE_DB_CONNECTION_NAME=$(gcloud sql instances describe ${ALGE_DB_NAME} | grep connectionName: | awk '{print $2}')

SQLPROXY=$(dirname "$0")/cloud_sql_proxy
if [ ! -f "$SQLPROXY" ]; then
    curl -o ${SQLPROXY} https://dl.google.com/cloudsql/cloud_sql_proxy.darwin.amd64
    chmod +x ${SQLPROXY}
fi

nohup ./${SQLPROXY} -dir=/cloudsql -instances=$ALGE_DB_CONNECTION_NAME=tcp:5432 > /dev/null 2>&1 &
SQLProxyProcessID=$!
#psql "host=127.0.0.1 sslmode=disable user=postgres"

conda env list | grep ${PROJECT_NAME}
if [ $? -ne 0 ]; then
    echo
    make install
fi

gcloud config set project ${ALGE_APP}

source activate ${PROJECT_NAME}
python manage.py migrate app
python manage.py makemigrations
python manage.py migrate app
conda deactivate

kill -9 $SQLProxyProcessID
