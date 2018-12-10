import lowercase from './lowerCase'

describe('#lowercase', () => {
  const inputs = [
    '--Foo-bar',
    'fooBar',
    '__FOO_BAR__'
  ]

  const expected = 'foo bar'

  inputs.forEach(input => {
    it(`should lowercase ${input}`, () => {
      const actual = lowercase(input)
      expect(actual).toBe(expected)
    })
  })
})
