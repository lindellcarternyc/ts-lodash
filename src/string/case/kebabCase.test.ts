import kebabCase from './kebabCase'

describe('#kebabCase', () => {
  const kebabInputs = ['foo bar', 'Foo Bar', '*foo__bar']

  const expected = 'foo-bar'

  kebabInputs.forEach(input => {
    it(`should return ${input} in kebab case`, () => {
      const actual = kebabCase(input)
      expect(actual).toBe(expected)
    })
  })
})
