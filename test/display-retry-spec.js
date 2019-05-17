const execa = require('execa')
const expect = require('chai').expect
const debug = require('debug')('test')

describe('environment with invalid DISPLAY', () => {
  it('retries cypress verify', () => {
    return execa
      .shell('$(npm bin)/cypress verify', {
        env: {
          DISPLAY: 'wrong-display-value'
        }
      })
      .then(({ stdout, code, stderr }) => {
        debug('exit code', code)
        debug('stderr', stderr)
        debug('stdout', stdout)

        expect(code, 'finished with 0').to.equal(0)
        expect(stderr, 'no error output').to.equal('')
        expect(stdout, 'includes warning').to.include(
          'Warning: Cypress failed to start'
        )
        expect(stdout, 'includes incorrect display').to.include(
          'wrong-display-value'
        )
        expect(stdout, 'includes verified message').to.include(
          'Verified Cypress!'
        )
      })
  })

  it('retries cypress run', () => {
    return execa
      .shell('$(npm bin)/cypress run', {
        env: {
          DISPLAY: 'wrong-display-value'
        }
      })
      .then(({ stdout, code, stderr }) => {
        debug('exit code', code)
        debug('stderr', stderr)
        debug('stdout', stdout)

        expect(code, 'finished with 0').to.equal(0)
        expect(stderr, 'no error output').to.equal('')
        expect(stdout, 'includes warning').to.include(
          'Warning: Cypress failed to start'
        )
        expect(stdout, 'includes incorrect display').to.include(
          'wrong-display-value'
        )
        expect(stdout, 'includes verified message').to.include(
          'Cypress will attempt to fix the problem and rerun'
        )
      })
  })
})
