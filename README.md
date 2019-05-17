# cypress-test-ci-environments

> Confirms that missing XVFB or dependencies can be detected by Cypress

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-ci-environments.svg?style=svg&circle-token=66a4d36c3966cbe476f13e7dfbe3af0693db3fb9)](https://circleci.com/gh/cypress-io/cypress-test-ci-environments)

Uses different Docker images to install Cypress and runs a test to verify
that a good error message is shown if the environment is missing XFVB
or a dependency.

## Running in Docker

To start a docker container

```shell
docker run -it -v $PWD:/e2e -w /e2e cypress/base:8 /bin/bash
```

Then install Cypress and run tests

## Debugging

Run tests with environment variable `DEBUG` for example

```
DEBUG=test npm run test-display-retry
```
