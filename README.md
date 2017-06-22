# cypress-test-ci-environments

> Confirms that missing XVFB or dependencies can be detected by Cypress

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-ci-environments.svg?style=svg&circle-token=66a4d36c3966cbe476f13e7dfbe3af0693db3fb9)](https://circleci.com/gh/cypress-io/cypress-test-ci-environments)

Uses different Docker images to install Cypress and runs a test to verify
that a good error message is shown if the environment is missing XFVB
or a dependency.
