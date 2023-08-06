#!/usr/bin/env bash

set -eo pipefail

PROJECT_NAME=alge
PYTHON_VERSION="Python 3.6.7"
CONDA_VERSION="conda 4.7.12"
PSQL_VERSION="(PostgreSQL) 11.5"
PIP_VERSION="pip 19.2.3"

echo " --- Dependencies --- "
echo "${PYTHON_VERSION} or +"
echo "${CONDA_VERSION} or +"
echo "${PIP_VERSION} or +"
echo "${PSQL_VERSION} or +"

echo
echo " --- Your versions --- "
conda --version
pip --version
psql --version

echo
echo " --- Installing Alg-E locally --- "
sleep 2

rm -fr build/
rm -fr dist/
rm -fr .eggs/
find . -name '*.egg-info' -exec rm -fr {} +
find . -name '*.egg' -exec rm -f {} +
find . -name '*.pyc' -exec rm -f {} +
find . -name '*.pyo' -exec rm -f {} +
find . -name '*~' -exec rm -f {} +
find . -name '__pycache__' -exec rm -fr {} +

conda env remove -yq -n ${PROJECT_NAME}
conda create -y --name ${PROJECT_NAME} --file conda.txt
source activate ${PROJECT_NAME}
pip install -U -r requirements.txt
pip install -e .
conda deactivate

echo
echo " --- The environment ${PROJECT_NAME} is set --- "