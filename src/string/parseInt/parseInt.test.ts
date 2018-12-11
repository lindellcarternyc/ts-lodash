import pInt from './parseInt'

describe('#parseInt', () => {
  it('should parse a string to an int', () => {
    expect(pInt('08')).toBe(8)
  })

  it('should accept an optional radix param', () => {
    expect(pInt('10', 10)).toBe(10)
    expect(pInt('10', 2)).toBe(2)
  })
})
