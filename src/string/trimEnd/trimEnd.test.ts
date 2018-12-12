import trimEnd from './trimEnd'

describe('#trimEnd', () => {
  it('should trim whitespace from the end of a string', () => {
    const input = '   abc   '
    const expected = '   abc'
    const actual = trimEnd(input)
    expect(actual).toBe(expected)
  })

  it('should trim a single char input', () => {
    const input = 'abcXXX'
    const expected = 'abc'
    const actual = trimEnd(input, 'X')
    expect(actual).toBe(expected)
  })

  it('should trim a set of characters', () => {
    const input = 'abc!@##X'
    const expected = 'abc'
    const actual = trimEnd(input, '!X@#')
    expect(actual).toBe(expected)
  })
})