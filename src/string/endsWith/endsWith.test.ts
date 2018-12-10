import endsWith from './endsWith'

describe('#endsWith', () => {
  it('should return true when a string ends with a character', () => {
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('should return true for a string with a few characters', () => {
    const a = endsWith('abcde', 'cde')
    expect(a).toBe(true)
  })

  it('should accep an position param', () => {
    const a = endsWith('abcde', 'b', 2)
    expect(a).toBe(true)
  })
})
