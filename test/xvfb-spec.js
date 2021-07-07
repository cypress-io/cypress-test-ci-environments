const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('environment with XVFB', () => {
  const missingDependenciesMessage = 'This may be due to a missing library or dependency.'
  const missingDependenciesSystemMessage = 'error while loading shared libraries'

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
        expect(err.message).to.include(missingDependenciesSystemMessage)
      })
  })
})
