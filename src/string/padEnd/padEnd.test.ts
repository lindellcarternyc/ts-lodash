import padEnd from './padEnd'

describe('#padEnd', () => {
  it('should pad the end of a string with spaces by default', () => {
    expect(padEnd('abc', 6)).toBe('abc   ')
  })

  it('should use characters provided', () => {
    expect(padEnd('abc', 6, '_-')).toBe('abc_-_')
  })

  it('should return the original string if original length >= length', () => {
    expect(padEnd('abc', 3)).toBe('abc')
  })
})