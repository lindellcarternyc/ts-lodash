import toLower from './toLower'

describe('#toLower', () => {
  const tests = [
    {
      input: '--foo-Bar--',
      expected: '--foo-bar--',
    },
    {
      input: 'fooBar',
      expected: 'foobar',
    },
    {
      input: '__FOO_BAR__',
      expected: '__foo_bar__',
    },
  ]

  tests.forEach(test => {
    it(`should return ${test.input} with all letters in lowercase`, () => {
      const actual = toLower(test.input)
      expect(actual).toBe(test.expected)
    })
  })
})
