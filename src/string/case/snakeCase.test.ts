import snakeCase from './snakeCase'

describe('#snakeCase', () => {
  it('should return a string in snake case', () => {
    const inputs = ['Foo Bar', 'fooBar', '--FOO-BAR--']

    inputs.forEach(input => {
      expect(snakeCase(input)).toBe('foo_bar')
    })
  })
})
