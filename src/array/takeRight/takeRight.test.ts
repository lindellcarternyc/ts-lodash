import takeRight from './takeRight'

describe('#takeRight', () => {
  const array = [1, 2, 3, 4, 5]
  it('should return a slice containing last item by default', () => {
    expect(takeRight(array)).toEqual([5])
  })

  it('should return n items from end of array', () => {
    expect(takeRight(array, 2)).toEqual([4, 5])
  })

  it('should return the whole array if n >= array length', () => {
    expect(takeRight(array, array.length)).toEqual(array)
    expect(takeRight(array, array.length + 4)).toEqual(array)
  })

  it('should return an empty array if n <= 0', () => {
    expect(takeRight(array, 0)).toEqual([])
    expect(takeRight(array, -1)).toEqual([])
  })
})