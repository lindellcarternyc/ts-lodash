import startsWith from './startsWith'

describe('#startsWith', () => {
  it('should return true when a string starts with provided string', () => {
    const doesStart = startsWith('abcde', 'a')
    expect(doesStart).toBe(true)
  })

  it('should return true when a string matches the provided RegExp', () => {
    const doesStart = startsWith('12345', /\d/)
    expect(doesStart).toBe(true)
  })

  it('should match starting from a positive index', () => {
    const a1 = startsWith('12345', '2', 1)
    expect(a1).toBe(true)

    const a2 = startsWith('12345', '3', 2)
    expect(a2).toBe(true)

    const a3 = startsWith('123-abc', /-a/, 3)
    expect(a3).toBe(true)
  })

  it('should search a neg index as from end', () => {
    const a1 = startsWith('12345', '5', -1)
    expect(a1).toBe(true)

    const a2 = startsWith('123asdfg4', /\w/, -2)
    expect(a2).toBe(true)
  })
})