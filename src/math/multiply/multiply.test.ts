import multiply from './multiply'

describe('#multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(6, 4)).toEqual(24)
  })
})
