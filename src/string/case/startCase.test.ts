import startCase from './startCase'

describe('#startCase', () => {
  it('should start case a string with dashes', () => {
    const input = '--foo-bar--'
    const expected = 'Foo Bar'
    const actual = startCase(input)
    expect(actual).toBe(expected)
  })

  it('should start case a string in camel case', () => {
    const cCase = 'fooBar'
    const sCase = 'Foo Bar'
    const actual = startCase(cCase)
    expect(actual).toBe(sCase)
  })

  it('should start case with unders scores, etc...', () => {
    const input = '__FOO_BAR__'
    const expected = 'FOO BAR'
    const actual = startCase(input)
    expect(actual).toBe(expected)
  })
})