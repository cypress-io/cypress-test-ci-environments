const execa = require('execa')
const expect = require('chai').expect
const {stripIndents} = require('common-tags')

describe('full good environment', () => {
  it('runs', () => {
    return execa('DEBUG=cypress:* $(npm bin)/cypress run', {shell: true})
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
      expect(results.code).to.equal(0, message)

      expect(results.stdout).to.include('is true')
      expect(results.stdout).to.include('1 passing')

      // make it simple to see the output changes
      // from the CI output
      console.log(message)
    })
  })
})
