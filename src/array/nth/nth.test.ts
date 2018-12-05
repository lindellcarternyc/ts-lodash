import nth from './nth'

describe('#nth', () => {
  const items = [1, 2, 3, 4, 5]
  it('should return the nth item in the array', () => {
    expect(nth(items, 1)).toEqual(2)
  })

  it('should return undefined if the index is greater than or equal to length', () => {
    expect(nth(items, 10)).toBe(undefined)
  })

  it('should treat negative numbers as offset from end of array', () => {
    expect(nth(items, -1)).toBe(5)
  })
})