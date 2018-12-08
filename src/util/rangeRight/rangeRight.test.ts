import rangeRight from './rangeRight'

describe('#rangeRight', () => {
  it('should return a range in descending order (start provided)', () => {
    const r1 = rangeRight(4)
    expect(r1).toEqual([3, 2, 1, 0])

    const r2 = rangeRight(-4)
    expect(r2).toEqual([-3, -2, -1, 0])
  })

  it('should return a range (desc) (2 params)', () => {
    const r1 = rangeRight(1, 5)
    expect(r1).toEqual([4, 3, 2, 1])
  })

  it('should return a range (desc) (3 params)', () => {
    const r1 = rangeRight(0, 20, 5)
    expect(r1).toEqual([15, 10, 5, 0])
    
    const r2 = rangeRight(0, -4, -1)
    expect(r2).toEqual([-3, -2, -1, 0])

    const r3 = rangeRight(1, 4, 0)
    expect(r3).toEqual([1, 1, 1])
  })
})
