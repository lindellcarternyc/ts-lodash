import pad from './pad'

describe('#pad', () => {
  it('should pad the start and end with spaces by default', () => {
    const expected = '  abc   '
    const actual = pad('abc', 8)
    expect(actual).toBe(expected)
  })

  it('should pad using a set of characters', () => {
    const expected = '_-abc_-_'
    const actual = pad('abc', 8, '_-')
    expect(actual).toBe(expected)
  })

  it('should return the original string if the length is <= original string length', () => {
    expect(pad('abc', 3)).toBe('abc')
  })
})