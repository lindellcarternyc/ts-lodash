import toUpper from './toUpper'

describe('#toUpper', () => {
  const tests = [
    {
      input: '--foo-bar--',
      expected: '--FOO-BAR--',
    },
    {
      input: 'fooBar',
      expected: 'FOOBAR',
    },
    {
      input: '__foo_bar__',
      expected: '__FOO_BAR__',
    },
  ]

  tests.forEach(test => {
    it(`should return ${test.input} in all caps`, () => {
      expect(toUpper(test.input)).toBe(test.expected)
    })
  })
})
