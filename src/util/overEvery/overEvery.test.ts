import overEvery from './overEvery'

describe('#overEvery', () => {
  it('should return a function', () => {
    const f = overEvery()
    expect(typeof f).toBe('function')
  })

  it('should default to identity as predicate', () => {
    const f = overEvery()
    expect(f(1)).toBe(true)
  })

  it('should accept a function', () => {
    const func = (n: number) => n >= 5
    const caller = overEvery([func])
    expect(caller(1, 2, 3)).toBe(false)
    expect(caller(5, 6, 7)).toBe(true)
  })

  it('should accept 2 functions', () => {
    const predicates = [
      (n: number) => n.toString(),
      (n: number) => n >= 5
    ]

    const caller = overEvery(predicates)
    expect(caller(1, 2, 3)).toBe(false)
    expect(caller(5, 6, 7)).toBe(true)
  })
})
