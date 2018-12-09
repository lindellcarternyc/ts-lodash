import toPath from './toPath'

describe('#toPath', () => {
  it('should return an array containing a single path', () => {
    const p = toPath('a')
    expect(p).toEqual(['a'])
  })

  it('should parse paths separated by dots', () => {
    const p1 = toPath('a.b')
    expect(p1).toEqual(['a', 'b'])

    const p2 = toPath('a.b.c')
    expect(p2).toEqual(['a', 'b', 'c'])
  })

  it('should recognize bracket notation', () => {
    const p = toPath('a[0]')
    expect(p).toEqual(['a', '0'])
  })

  it('should recognize a combo of brackets and dots', () => {
    const p1 = toPath('a.b[0]')
    expect(p1).toEqual(['a', 'b', '0'])

    const p2 = toPath('a[1].b')
    expect(p2).toEqual(['a', '1', 'b'])

    const p3 = toPath('a[0][1].b[2]')
    expect(p3).toEqual(['a', '0', '1', 'b', '2'])
    
  })
})
