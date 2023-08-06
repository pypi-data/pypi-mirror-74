#!/usr/bin/env bash

LAST_VERSION=$(pip search - https://pypi.org/project/alge | grep alge | awk '{print $2}' | sed 's/(//g' | sed 's/)//g')
THIS_VERSION=$(./$(dirname "$0")/../../setup.py --version)


if [ "$LAST_VERSION" == "$THIS_VERSION" ]; then
    echo
    echo "Bump the version first in setup.py, please"
    exit 1
fi

source $(dirname "$0")/.secrets.sh
rm -rf $(dirname "$0")/../../dist/*
python $(dirname "$0")/../../setup.py bdist_wheel sdist

pip install twine
twine upload $(dirname "$0")/../../dist/* -u $PYPI_USER -p $PYPI_PASSWORD
