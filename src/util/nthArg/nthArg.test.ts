import nthArg from './nthArg'

describe('#nthArg', () => {
  it('should return a function', () => {
    expect(typeof nthArg()).toBe('function')
  })

  it('should default to the first parameter', () => {
    const f = nthArg()
    const actual = f('a', 'b', 'x')
    expect(actual).toBe('a')
  })

  it('should return the arg at a pos idx', () => {
    const f = nthArg(1)
    const actual = f(1, 2, 'a', 'b')
    expect(actual).toBe(2)
  })

  it('should recognize negative indexes', () => {
    expect(nthArg(-1)(1, 2, null)).toBe(null)
    expect(nthArg(-2)({}, {hello: 'str'})).toEqual({})
  })
})
