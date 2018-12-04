/**
 * Function drop
 * @param array an array of items
 * @param n [defaults to 1] the number of items to drop
 *
 * @returns Array with items dropped
 */

import { drop as _drop } from 'lodash'

import drop from './drop'

describe('#drop', () => {
  it('should return an array', () => {
    expect(drop([1, 2, 3, 4])).toBeInstanceOf(Array)
  })

  it('should drop one item when n = 1', () => {
    const input = [1, 2, 3, 4]
    const expected = _drop(input, 1)
    const actual = drop(input, 1)
    expect(actual).toEqual(expected)
  })

  const testInput = 'abcdefghijklmnopqrstuv'.split('')
  for (let tIndex = 0; tIndex < testInput.length; tIndex++) {
    it(`should remove ${tIndex} items from array ${testInput}`, () => {
      const expected = _drop(testInput, tIndex)
      const actual = drop(testInput, tIndex)
      expect(actual).toEqual(expected)
    })
  }

  it('should return an empty array if n is greater than array length', () => {
    const expected = _drop(testInput, testInput.length + 2)
    const actual = drop(testInput, testInput.length + 2)
    expect(actual).toEqual(expected)
  })

  it('should treat negative n the same way that lodash does...', () => {
    const array = [1, 2, 3, 4, 5]
    const expected = _drop(array, -1)
    const actual = drop(array, -1)
    expect(actual).toEqual(expected)
  })
})
