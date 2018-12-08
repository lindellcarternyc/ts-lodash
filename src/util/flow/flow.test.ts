import flow from './flow'

describe('#flow', () => {
  const funcs = [(n: number, m: number) => n + m, (n: number) => n * n]

  it('should create a function', () => {
    const func = flow(funcs)

    expect(typeof func).toBe('function')
  })

  it('should invoke the supplied functions', () => {
    const expected = 9
    const addSquare = flow(funcs)
    const actual = addSquare(1, 2)
    expect(actual).toBe(expected)
  })
})
