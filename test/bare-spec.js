const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('bare environment without XVFB', () => {
  it('says XVFB is unavailable', () => {
    return execa.shell('$(npm bin)/cypress verify')
      .then(results => {
        const message = stripIndents`
          === start of shell output
          exit code:
            ${results.code}
          stdout:
            ${results.stdout}
          stderr:
            ${results.stderr}
          === end of shell output
        `
        expect(results.code).not.to.equal(0, message)

        // make it simple to see the output changes
        // from the CI output
        console.log(message)
      })
  })
})
