import floor from './floor'

describe('#floor', () => {
  it('should return the floor of a decimal number', () => {
    const actual = floor(4.0006)
    expect(actual).toEqual(4)
  })

  it('should accept a positive precision param', () => {
    const a1 = floor(0.046, 3)
    expect(a1).toEqual(0.046)

    const a2 = floor(0.046, 2)
    expect(a2).toEqual(0.04)
  })

  it('should accept a negative precision param', () => {
    const a = floor(4060, -2)
    expect(a).toEqual(4000)
  })
})
