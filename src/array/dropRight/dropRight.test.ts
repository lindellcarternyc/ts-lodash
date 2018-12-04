/**
 * Given an array of items
 * and a number of items to drop (defaults to 1)
 * it should return a new array with items dropped from the end of the array
 */

import { dropRight as dRight } from 'lodash'

import dropRight from './dropRight'

describe('#dropRight', () => {
  it('should return an array', () => {
    expect(dropRight([1, 2, 3])).toBeInstanceOf(Array)
  })

  it('should drop 1 from the end', () => {
    const inputArray = [1, 2, 3]
    const expected = dRight(inputArray)
    const actual = dropRight(inputArray)
    expect(actual).toEqual(expected)
  })

  const inputs = 'abcdefghijk'.split('')
  for (let idx = 0; idx < inputs.length; idx++) {
    const expected = dRight(inputs, idx)
    const actual = dropRight(inputs, idx)
    it(`should drop ${idx} items from then end of ${inputs}`, () => {
      expect(actual).toEqual(expected)
    })
  }

  it('should reuturn an empty array for n >= array length', () => {
    const expected1 = dRight(inputs, inputs.length)
    const actual1 = dropRight(inputs, inputs.length)
    expect(actual1).toEqual(expected1)

    const expected2 = dRight(inputs, inputs.length + 1)
    const actual2 = dropRight(inputs, inputs.length + 1)
    expect(actual2).toEqual(expected2)
  })

  it('should treat negative numbers the same way that lodash does', () => {
    const expected = dRight(inputs, -1)
    const actual = dropRight(inputs, -1)
    expect(actual).toEqual(expected)
  })
})
