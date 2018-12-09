import mean from './mean'

describe('#mean', () => {
  it('should return the mean of an array of numbers', () => {
    expect(mean([1, 2, 3])).toEqual(2)
  })

  it('should return undefined for an empty array', () => {
    expect(mean([])).toBe(undefined)
  })
})
