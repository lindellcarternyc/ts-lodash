import trimStart from './trimStart'

describe('#trimStart', () => {
  it('should trim white space from the start of a string', () => {
    const input = '   abc'
    const expected = 'abc'
    const actual = trimStart(input)
    expect(actual).toBe(expected)
  })

  it('should work with a multople characters', () => {
    const input = '12 abc'
    const expected = 'abc'
    const actual = trimStart(input, '12 ')
    expect(actual).toBe(expected)
  })

  it('should work with a single character', () => {
    const input = 'XXXabs'
    const expected = 'abs'
    const actual = trimStart(input, 'X')
    expect(actual).toBe(expected)
  })
})