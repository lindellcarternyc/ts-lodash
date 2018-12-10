import toPrecision from './toPrecision'

describe('#toPrecision', () => {
  it('should accept ceil | floor as methods', () => {
    const actual = toPrecision('ceil')(5.4)
    expect(actual).toEqual(6)
  })

  it('should work with positive precision param', () => {
    const a = toPrecision('floor', 2)(5.014)
    expect(a).toEqual(5.01)
  })

  it('should work with neg numbers', () => {
    const a = toPrecision('floor', -2)(6040)
    expect(a).toEqual(6000)
  })
})
