import flowRight from './flowRight'

describe('#flowRight', () => {
  it('should create a function that invokes provided functions right to left', () => {
    const add = (a: number, b: number) => a + b
    const square = (n: number) => n * n
    const func = flowRight([square, add])
    const actual = func(1, 2)
    expect(actual).toBe(9)
  })
})