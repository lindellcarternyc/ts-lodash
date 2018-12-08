import matches from './matches'

describe('#matches', () => {
  it('should return a function', () => {
    const func = matches({ a: 4, b: 5 })
    expect(typeof func).toBe('function')
  })

  it('should return true if an object matches', () => {
    const func = matches({ a: 1 })
    const actual = func({ a: 1, b: 2 })
    expect(actual).toBe(true)
  })

  it('should return false if it does not', () => {
    const func = matches({ name: 'false' })
    const actual = func({ name: 'sdf' })
    expect(actual).toBe(false)
  })
})
