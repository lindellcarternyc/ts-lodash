import lastIndexOf from './lastIndexOf'

describe('#lastIndexOf', () => {
  const items = [1, 2, 1, 2, 3, 4, 5]

  it('should find the last index of the value', () => {
    expect(lastIndexOf(items, 2)).toEqual(3)
  })

  it('should return -1 if the value is not found', () => {
    expect(lastIndexOf(items, 6)).toEqual(-1)
  })

  it('should find the last index before from index', () => {
    expect(lastIndexOf(items, 2, 2)).toEqual(1)
  })
})