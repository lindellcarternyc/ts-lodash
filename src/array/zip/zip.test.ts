import zip from './zip'

describe('#zip', () => {
  const numbers = [1, 2, 3, 4, 5]
  const letters = 'abcde'.split('')
  const booleans = [true, true, false, true]

  it('should return single element arrays if one array is provided', () => {
    const expectedNumbers = [[1], [2], [3], [4], [5]]
    expect(zip(numbers)).toEqual(expectedNumbers)
  })

  it('should zip two arrays of the same length', () => {
    const expectedZippedNumbersAndLetters = [
      [1, 'a'],
      [2, 'b'],
      [3, 'c'],
      [4, 'd'],
      [5, 'e']
    ]

    const actualZippedNumsAndLetters = zip(numbers, letters)
    expect(actualZippedNumsAndLetters).toEqual(expectedZippedNumbersAndLetters)
  })

  it('should zip up to the length of shortest provided array', () => {
    const expectedAllZipped = [
      [1, 'a', true],
      [2, 'b', true],
      [3, 'c', false],
      [4, 'd', true]
    ]

    const actualAllZipped = zip(numbers, letters, booleans)
    expect(actualAllZipped).toEqual(expectedAllZipped)
  })
})