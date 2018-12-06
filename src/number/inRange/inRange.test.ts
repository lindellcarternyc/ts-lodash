import inRange from './inRange'

describe('#inRange', () => {
  it('should return true if a number is in a range', () => {
    expect(inRange(10, 0, 20)).toBe(true)
    expect(inRange(10, 20)).toBe(true)
    expect(inRange(10.5, 0.2, 20)).toBe(true)
  })

  it('should return false if it is not in the range', () => {
    expect(inRange(-5, 10)).toBe(false)
    expect(inRange(-5, 0, 2)).toBe(false)
  })
})
