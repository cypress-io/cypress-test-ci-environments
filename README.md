# cypress-test-ci-environments

> Confirms that missing XVFB or dependencies can be detected by Cypress

Uses different Docker images to install Cypress and runs a test to verify
that a good error message is shown if the environment is missing XFVB
or a dependency.
