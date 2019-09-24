# cypress-test-ci-environments [![renovate-app badge][renovate-badge]][renovate-app]

> Confirms that missing XVFB or dependencies can be detected by Cypress

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-ci-environments/tree/master.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-ci-environments/tree/master)

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

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
