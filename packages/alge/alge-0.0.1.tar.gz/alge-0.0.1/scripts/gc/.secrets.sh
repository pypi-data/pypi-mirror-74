#!/usr/bin/env bash


export PROJECT_NAME="alge"
export ALGE_VERSION=a
export ALGE_REGION="us-central"
export ALGE_APP="clinicapp-alge"
export ALGE_GC_RUN="true"

# POSTGRES
export ALGE_DB_NAME=alge-db-$ALGE_VERSION
export ALGE_DB_USER=postgres
export ALGE_DB_PASSWORD="UWWNL6%z?3<MV\.~%htN=9+$"
export ALGE_DB_ENGINE=POSTGRES_9_6
export ALGE_DB_MEMORY=3840MiB
export ALGE_DB_PORT=5432
export ALGE_DB_N_CPU=1
export ALGE_DB_STORAGE_TYPE=SSD

# BUCKET to tables and static files
export ALGE_DB_TABLES=alge-tables-$ALGE_VERSION
export ALGE_APP_STATIC_FILES_BUCKET=alge-static-$ALGE_VERSION

# APP
export ALGE_APP_NAME=$PROJECT_NAME-$ALGE_VERSION
export ALGE_APP_SECRET_KEY="4dbgj9((dey#0!1ie@spppfbvj!2av6s1-16)1xp70ss"
export ALGE_PUBLIC_ENDPOINT="clinicapp-alge.appspot.com"
export ALGE_HOST="/cloudsql/clinicapp-alge:us-central1:alge-db-a"

#env_variables:
#  ALGE_GC_RUN: true
#  ALGE_PUBLIC_ENDPOINT: clinicapp-alge.appspot.com
#  ALGE_DB_NAME: postgres
#  ALGE_DB_USER: postgres
#  ALGE_DB_PASSWORD: UWWNL6%z?3<MV\.~%htN=9+$
#  ALGE_DB_PORT: 5432
#  ALGE_HOST: /cloudsql/clinicapp-alge:us-central1:alge-db-a
#  ALGE_DB_TABLES: alge-tables-a
#  ALGE_APP_STATIC_FILES_BUCKET: alge-static-a
#  ALGE_APP_SECRET_KEY: 4dbgj9((dey#0!1ie@spppfbvj!2av6s1-16)1xp70ss

