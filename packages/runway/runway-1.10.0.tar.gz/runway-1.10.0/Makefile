.PHONY: list sync sync_two sync_all pipenv_lock clean lint lint_two test test-integration test-unit test_shim create_tfenv_ver_file build build_pyinstaller_file build_pyinstaller_folder build_whl release npm_prep

# list all targets in this Makefile
list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

sync:
	PIPENV_VENV_IN_PROJECT=1 pipenv sync -d

# changes that need to be made inorder to sync python two (may also require deletion of the existing lock file)
sync_two:
	pipenv install "astroid<2.0" "pylint<2.0" --dev
	PIPENV_VENV_IN_PROJECT=1 pipenv install --dev

# sync all virtual environments used by this project with their Pipfile.lock
sync_all:
	PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev --three
	pushd docs && PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev --three && popd
	pushd integration_tests && PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev --three && popd
	pushd integration_test_infrastructure && PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev --three && popd

# update all Pipfile.lock's used by this project
pipenv_lock:
	pipenv lock --dev
	pushd docs && pipenv lock --dev && popd
	pushd integration_tests && pipenv lock --dev && popd
	pushd integration_test_infrastructure && pipenv lock --dev && popd

clean:
	rm -rf build/
	rm -rf dist/
	rm -rf runway.egg-info/
	rm -rf tmp/
	rm -rf src/
	rm -rf package.json postinstall.js preuninstall.js .coverage .npmignore

lint:
	pipenv run flake8 --exclude=runway/embedded,runway/templates runway
	find runway -name '*.py' -not -path 'runway/embedded*' -not -path 'runway/templates/stacker/*' -not -path 'runway/templates/cdk-py/*' -not -path 'runway/blueprints/*' | xargs pipenv run pylint --rcfile=.pylintrc
	find runway/blueprints -name '*.py' | xargs pipenv run pylint --disable=duplicate-code

# linting for python 2, requires additional disables
lint_two:
	pipenv run flake8 --exclude=runway/embedded,runway/templates --ignore=D101,D403,E124,W504 runway
	find runway -name '*.py' -not -path 'runway/embedded*' -not -path 'runway/templates/stacker/*' -not -path 'runway/templates/cdk-py/*' -not -path 'runway/blueprints/*' | xargs pipenv run pylint --rcfile=.pylintrc --disable=bad-option-value,relative-import
	find runway/blueprints -name '*.py' | xargs pipenv run pylint --disable=duplicate-code

test:
	@echo "Running integration & unit tests..."
	@pipenv run pytest --cov=runway --cov-report term:skip-covered --integration

test-functional:
	@echo "Running functional tests..."
	@pipenv run pytest --functional --no-cov

test-integration:
	@echo "Running integration tests..."
	@pipenv run pytest --cov=runway --cov-report term:skip-covered --integration-only

test-unit:
	@echo "Running unit tests..."
	@pipenv run pytest --cov=runway --cov-config=tests/unit/.coveragerc --cov-report term-missing

test_shim:
	bash ./.github/scripts/cicd/test_shim.sh

create_tfenv_ver_file:
	curl --silent https://releases.hashicorp.com/index.json | jq -r '.terraform.versions | to_entries | map(select(.key | contains ("-") | not)) | sort_by(.key | split(".") | map(tonumber))[-1].key' | egrep -o '^[0-9]*\.[0-9]*\.[0-9]*' > runway/templates/terraform/.terraform-version

build: clean create_tfenv_ver_file
	python setup.py sdist

build_pyinstaller_file: clean create_tfenv_ver_file
	bash ./.github/scripts/cicd/build_pyinstaller.sh file

build_pyinstaller_folder: clean create_tfenv_ver_file
	bash ./.github/scripts/cicd/build_pyinstaller.sh folder

build_whl: clean create_tfenv_ver_file
	python setup.py bdist_wheel --universal

release: clean create_tfenv_ver_file build
	twine upload dist/*
	curl -D - -X PURGE https://pypi.org/simple/runway

# requires setuptools-scm and setuptools global python installs
# copies artifacts to src & npm package files to the root of the repo
# updates package.json with the name of the package & semver version from scm (formated for npm)
npm_prep:
	mkdir -p tmp
	mkdir -p src
	cp -r artifacts/$$(python ./setup.py --version)/* src/
	cp npm/* . && cp npm/.[^.]* .
	jq ".version = \"$${NPM_PACKAGE_VERSION:-$$(python ./setup.py --version | sed -E "s/\.dev/-dev/")}\"" package.json > tmp/package.json
	jq ".name = \"$${NPM_PACKAGE_NAME-undefined}\"" tmp/package.json > package.json
	rm -rf tmp/package.json
