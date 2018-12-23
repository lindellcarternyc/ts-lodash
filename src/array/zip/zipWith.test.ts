import zipWith from './zipWith'

describe('zip with', () => {
  const numbers = [1, 2, 3, 4, 5]
  const letters = 'abcde'.split('')
  const booleans = [true, true, true, false]

  it('should work with a single array and a function', () => {
    const func = (n: number) => `**${n}**`
    const expectedZippedWith = numbers.map(func)
    const actualZippedWith = zipWith([numbers], func)
    expect(actualZippedWith).toEqual(expectedZippedWith)
  })

  it('should work with multiple values', () => {
    const expectedNumLetters = ['1a', '2b', '3c', '4d', '5e']
    const actualNumLetters = zipWith([numbers, letters], (n, s) => {
      return `${n}${s}`
    })
    expect(actualNumLetters).toEqual(expectedNumLetters)
  })

  it('should work with multiple types', () => {
    const expectedMultple = ['1a', '2b', '3c', 4]
    const actualMultiple = zipWith([numbers, letters, booleans], (n, l, b) => {
      if (b) {
        return `${n}${l}`
      }
      return n
    })
    expect(actualMultiple).toEqual(expectedMultple)
  })
})
