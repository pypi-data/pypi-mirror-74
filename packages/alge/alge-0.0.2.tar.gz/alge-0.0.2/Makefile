PROJECT_NAME=alge
TEST_PATH=test


help:
	@echo "install - install project locally using conda"
	@echo "bootstrap-db - bootstrap locally the database"
	@echo "run - run app locally"


install:
	bash -c "bash scripts/local/install.sh"

bootstrap-db:
	bash -c "bash scripts/local/bootstrap-db.sh"

run:
	bash -c "bash scripts/local/run.sh"

test: clean-pyc
	bash -c "source activate $(PROJECT_NAME) &&  py.test --verbose --color=yes $(TEST_PATH)"

gc-bootstrap-db:
	bash -c "bash scripts/gc/bootstrap-db.sh"

gc-migrate-db:
	bash -c "bash scripts/gc/make-migration-db.sh"

gc-deploy:
	bash -c "bash scripts/gc/deploy.sh"

push-pypi:
	bash -c "bash scripts/push-pypi.sh"


clean-build:
	rm -fr build/
	rm -fr dist/
	rm -fr .eggs/
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -f {} +


clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +