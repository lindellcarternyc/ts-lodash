import min from './min'

describe('#min', () => {
  it('should return the min number', () => {
    expect(min([1, 2, 3])).toBe(1)

    expect(min([1.1, 2])).toEqual(1.1)
  })

  it('should return undefined for an empty array', () => {
    expect(min([])).toBe(undefined)
  })
})
