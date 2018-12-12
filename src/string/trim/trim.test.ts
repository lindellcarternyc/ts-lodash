import trim from './trim'

describe('#trim', () => {
  it('should trim whitespace', () => {
    const input = '   abc   '
    const expected = 'abc'
    const actual = trim(input)
    expect(actual).toBe(expected)
  })

  it('should trim a single input char', () => {
    const input = '@@ABC@@'
    const expected = 'ABC'
    const actual = trim(input, '@')
    expect(actual).toBe(expected)
  })

  it('should trim all provided chars', () => {
    const input = '123hello123'
    const expected = 'hello'
    const actual = trim(input, '123')
    expect(actual).toBe(expected)
  })
})