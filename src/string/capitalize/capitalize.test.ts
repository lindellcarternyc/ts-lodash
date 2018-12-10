import capitalize from './capitalize'

describe('#capitalize', () => {
  interface ITest {
    input: string
    expected: string
  }

  const tests: ITest[] = [
    {
      input: 'fred',
      expected: 'Fred',
    },
    {
      input: 'HELLO',
      expected: 'Hello',
    },
    {
      input: 'abCdE',
      expected: 'Abcde',
    },
  ]

  tests.forEach(test => {
    it(`should capitalize ${test.input}`, () => {
      const actual = capitalize(test.input)
      expect(actual).toBe(test.expected)
    })
  })
})
