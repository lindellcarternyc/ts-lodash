import padStart from './padStart'

describe('#padStart', () => {
  it('should return the original string if its length >= provided length', () => {
    expect(padStart('abc', 3)).toBe('abc')
  })

  it('should default to padding with spaces', () => {
    expect(padStart('abc', 6)).toBe('   abc')
  })
})