/**
 * Given an array and a number of values
 * return a new array containing elements that 
 * are only in one of the inputs
 */

import difference from './difference'

import { difference as _diff } from 'lodash'

describe('#difference', () => {
  it('should return an array', () => {
    expect(difference([1], [2])).toBeInstanceOf(Array)
  })

  it('should remove the difference with one element', () => {
    const inputs = [1, 2, 3]
    const values = [1]
    const expected = _diff(inputs, values)
    const actual = difference(inputs, values)
    expect(actual).toEqual(expected)
  })

  interface ITest<T = any> {
    inputArray: T[]
    differenceValues: T[]
    expectedDifference: T[]
  }

  const tests: ITest[] = [{
    inputArray: [1, 2, 3],
    differenceValues: [3, 4],
    expectedDifference: _diff([1, 2,3], [3, 4])
  }, {
    inputArray: ['a', 'b'],
    differenceValues: ['c', 'd'],
    expectedDifference: _diff(['a', 'b'], ['c', 'd'])
  }]

  tests.forEach(t => {
    it(`should find the difference between ${t.inputArray} and ${t.differenceValues}`, () => {
      const actual = difference(t.inputArray, t.differenceValues)
      expect(actual).toEqual(t.expectedDifference)
    })
  })
})