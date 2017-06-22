const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('environment with XVFB', () => {
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
        expect(err.message).to.include('spawn Xvfb ENOENT', err.message)
        // make it simple to see the output changes
        // from the CI output
        console.log(err.message)
      })
  })
})
