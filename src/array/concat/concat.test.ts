/**
 * concat method
 * given an initial array and a number of values
 * return new array with values added
 */

import concat from './concat'

describe('#concat', () => {
  it('should concat 1 element to an array', () => {
    const initialArray = [1, 2, 3]
    const values = [4]
    const expectedConcatedArray = [1, 2, 3, 4]
    const actual = concat(initialArray, ...values)
    expect(actual).toEqual(expectedConcatedArray)
  })

  const tests = [
    {
      input: [1, 2, '3'],
      values: [{ name: 'lindell' }],
      expected: [1, 2, '3', { name: 'lindell' }],
    },
    {
      input: ['hello', '() => null'],
      values: [true, false],
      expected: ['hello', '() => null', true, false],
    },
  ]

  tests.forEach(t => {
    it(`should concat ${t.values.length} items to array ${t.input}`, () => {
      const actual = concat(t.input, ...t.values)
      expect(actual).toEqual(t.expected)
    })
  })

  it('should concat nested arrays and values', () => {
    const input = [1, [2, 3], [[4], [5]]]
    const values = ['a', ['b', 'c'], [['e', 'f']]]
    const expected = [...input, ...values]
    const actual = concat(input, ...values)
    expect(actual).toEqual(expected)
  })
})
