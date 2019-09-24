const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('bare environment without XVFB', () => {
  const missingXvfbMessage = 'spawn Xvfb ENOENT'

  it('says XVFB is unavailable', () => {
    return execa('$(npm bin)/cypress verify', {shell: true})
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
          Somehow verified Cypress without XVFB.

          ${text}
        `)
      })
      .catch(err => {
        // make it simple to see the output changes
        // from the CI output
        console.log(err.message)
        expect(err.message).to.include(missingXvfbMessage)
      })
  })
})
