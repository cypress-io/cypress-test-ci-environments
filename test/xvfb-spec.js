const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('environment with XVFB', () => {

  const missingDependenciesMessage = stripIndents`
    Problem running Cypress application
    This is usually caused by a missing library or dependency.
    The error below should indicate which dependency is missing.
  `

  it('is missing dependencies', () => {
    return execa.shell('$(npm bin)/cypress verify')
      .then(results => {
        const text = stripIndents`
          === start of shell output
          exit code:
            ${results.code}
          stdout:
            ${results.stdout}
          stderr:
            ${results.stderr}
          === end of shell output
        `
        throw new Error(stripIndents`
          Somehow verified Cypress without dependencies.

          ${text}
        `)
      })
      .catch(err => {
        // make it simple to see the output changes
        // from the CI output
        console.log(err.message)
        expect(err.message).to.include(missingDependenciesMessage)
      })
  })
})
