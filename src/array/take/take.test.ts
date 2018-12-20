import take from './take'

describe('#take', () => {
  const array = [1, 2, 3, 4, 5]
  it('should take the first element by default', () => {
    expect(take(array)).toEqual([1])
  })

  it('should should return an empty array if n <= 0', () => {
    expect(take(array, 0)).toEqual([])
    expect(take(array, -1)).toEqual([])
  })

  it('should return n elements if n < array length', () => {
    expect(take(array, 2)).toEqual([1, 2])
    expect(take(array, 3)).toEqual([1, 2, 3])
  })

  it('should return all elements if n >= array length', () => {
    expect(take(array, array.length)).toEqual(array)
    expect(take(array, array.length + 5)).toEqual(array)
  })
})