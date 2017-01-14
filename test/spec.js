const { describe, it, beforeEach } = require('mocha')
const expect = require('unexpected')
const perfect = require('../')

describe('perfect.env', () => {
  beforeEach(() => {
    delete process.env.PORT
  })

  it('should return the env variable if set', () => {
    process.env.PORT = '1337'
    const { PORT } = perfect.env
    expect(PORT, 'to equal', '1337')
  })

  it('should throw an error when getting an unset env variable', () => {
    expect(() => {
      const { PORT } = perfect.env
      console.log(PORT)
    }, 'to throw', Error)
  })
})
