import sum from './sum'

describe('#sum', () => {
  it('should sum an array of numbers', () => {
    const actual = sum([1, 2, 3, 4])
    expect(actual).toBe(10)
  })

  it('should return undefined for an empty array', () => {
    const actual = sum([])
    expect(actual).toBe(undefined)
  })
})
