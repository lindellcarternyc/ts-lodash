/**
 * Given an array of elements and size (n), split array into chunks of size (n)
 */

import chunk from './chunk'

 describe('#chunk', () => {
  const inputArray = [1, 2, 3, 4, 5, 6]
  const chunkTests = [
    {
      size: 1,
      expected: [[1], [2], [3], [4], [5], [6]]
    },
    {
      size: 2,
      expected: [[1, 2], [3, 4], [5, 6]]
    },
    {
      size: 3,
      expected: [[1, 2, 3], [4, 5, 6]]
    },
    {
      size: 4,
      expected: [[1, 2, 3, 4], [5, 6]]
    },
    {
      size: 5,
      expected: [[1, 2, 3, 4, 5], [6]]
    },
    {
      size: 6,
      expected: [[1, 2, 3, 4, 5, 6]]
    }
  ]

  chunkTests.forEach(test => {
    it(`should create chunks of size ${test.size}`, () => {
      const actualChunks = chunk(inputArray, test.size)
      expect(actualChunks).toEqual(test.expected)
    })
  })
})