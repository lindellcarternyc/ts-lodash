import camelCase from './camelCase'

describe('#camelCase', () => {
  it('should return a string in camel case', () => {
    const a = camelCase('camelCase')
    expect(a).toBe('camelcase')
  })

  it('should camel case a single string', () => {
    const a1 = camelCase('Foo')
    expect(a1).toBe('foo')
  })

  it('should camel case a space separated string', () => {
    const expected = 'fooBar'

    const inputs = ['foo bar', 'Foo Bar', 'Foo bar', 'FOO BAR']

    inputs.forEach(input => {
      expect(camelCase(input)).toBe(expected)
    })
  })

  it('should ignore non letters', () => {
    const inputs = ['-foo-bar*', '__FOO_BAR__']
    const expected = 'fooBar'

    inputs.forEach(input => {
      expect(camelCase(input)).toBe(expected)
    })
  })
})
