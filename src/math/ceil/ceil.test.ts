import ceil from './ceil'

describe('#ceil', () => {
  it('should accept a number and return a number', () => {
    const n = ceil(1.2)
    expect(typeof n).toBe('number')
  })

  it('should round a number to the next integer', () => {
    const n1 = ceil(4.0)
    expect(n1).toEqual(4)

    const n2 = ceil(4.01)
    expect(n2).toEqual(5)
  })

  it('should accept a precision param', () => {
    const n1 = ceil(6.004, 2)
    expect(n1).toEqual(6.01)

    const n2 = ceil(6.01, 2)
    expect(n2).toEqual(6.01)

    const n3 = ceil(6.01, 1)
    expect(n3).toEqual(6.1)

    const n4 = ceil(6.11, 1)
    expect(n4).toEqual(6.2)
  })

  it('should accept a negative precision to round greater than whole number', () => {
    const n1 = ceil(6040, -2)
    expect(n1).toEqual(6100)
  })
})
