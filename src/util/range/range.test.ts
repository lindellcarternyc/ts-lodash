import range from './range'

describe('#range', () => {
  it('should return an array', () => {
    const r = range(0)
    expect(r).toEqual([])
  })

  it('should create a range from 0 to a positive number', () => {
    const r = range(5)
    expect(r).toEqual([0, 1, 2, 3, 4])
  })

  it('should take start end end params', () => {
    const r = range(1, 5)
    expect(r).toEqual([1, 2, 3, 4])
  })

  it('should work with floating points', () => {
    const r1 = range(5.5)
    expect(r1).toEqual([0, 1, 2, 3, 4, 5])

    const r2 = range(0.5, 5.5)
    expect(r2).toEqual([0.5, 1.5, 2.5, 3.5, 4.5])
  })

  it('should accept 3 params', () => {
    const r = range(1, 12, 2)
    expect(r).toEqual([1, 3, 5, 7, 9, 11])
  })

  it('should accept negative steps', () => {
    const r1 = range(10, 0, -1)
    expect(r1).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])

    const r2 = range(0, 5, -1)
    expect(r2).toEqual([5, 4, 3, 2, 1])
  })

  it('should default to a negative range if a negative start is given', () => {
    const r = range(-5)
    expect(r).toEqual([0, -1, -2, -3, -4])
  })

  it('accepts 0 as a step', () => {
    const r = range(1, 4, 0)
    expect(r).toEqual([1, 1, 1])
  })
})
