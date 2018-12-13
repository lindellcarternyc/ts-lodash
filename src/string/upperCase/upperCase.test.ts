import upperCase from './upperCase'

describe('#upperCase', () => {
  it('should convert a string to uppercase', () => {
    const input = 'foo'
    const expected = 'FOO'
    const actual = upperCase(input)
    expect(actual).toBe(expected)
  })

  it('should ignore white space between words', () => {
    const input = 'foo bar'
    const expected = 'FOO BAR'
    const actual = upperCase(input)
    expect(actual).toBe(expected)
  })

  const tests = [
    '--foo-bar',
    'fooBar',
    '__foo_bar__'
  ]

  tests.forEach(test => {
    it(`should convert ${test}`, () => {
      expect(upperCase(test)).toBe('FOO BAR')
    })
  })
})