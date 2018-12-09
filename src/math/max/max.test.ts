import max from './max'

describe('#max', () => {
  it('should return the max of an array of numbers', () => {
    expect(max([1, 2, 3])).toBe(3)

    expect(max([1.1, 4, 6.2])).toEqual(6.2)
  })

  it('should return undefined for an empty array or NaN', () => {
    expect(max([])).toBe(undefined)
  })
})
