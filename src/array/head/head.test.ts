import head from './head'

describe('#head', () => {
  it('should return the first item of an array', () => {
    const array = [1, 2, 3]
    expect(head(array)).toBe(1)
    expect(array).toEqual([1, 2, 3])
  })

  it('should return undefined for an empty array', () => {
    expect(head([])).toEqual(undefined)
  })
})