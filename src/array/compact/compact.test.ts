/**
 * Given an array return a new array with all falsey values removed
 * i.e. undefined, null, 0, '',
 */

import compact from './compact'

import { compact as _compact } from 'lodash'

describe('#compact', () => {
  const tests = [
    {
      input: [0, 1, 2, null, [4]],
      expected: [1, 2, [4]]
    },
    {
      input: [[], 'sdjsg', undefined],
      expected: [[], 'sdjsg']
    }
  ]

  tests.forEach(t => {
    it(`should remove falsey values from an array ${t.input}`, () => {
      const input = t.input
      const actualCompacted = compact(input)
      expect(actualCompacted).toEqual(t.expected)
    })
  })
})