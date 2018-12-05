import last from './last'

describe('#last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('should return undefined for an empty array', () => {
    expect(last([])).toBe(undefined)
  })
})