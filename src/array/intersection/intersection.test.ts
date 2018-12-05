import intersection from './intersection'

describe('#intersection', () => {
  it('should return the intersection of 2 arrays', () => {
    const arrays = [[2, 3], [2, 1]]
    const expected = [2]
    const actual = intersection(...arrays)
    expect(actual).toEqual(expected)
  })

  it('should return the intersection of 3 arrays', () => {
    const arrays: string[][] = [['a', 'b', 'c'], ['a', 'd'], ['b']]
    const expected = ['a', 'b']
    const actual = intersection(...arrays)
    expect(actual).toEqual(expected)
  })

  it('should ignore duplicates', () => {
    const arrays = [[2, 2, 3], [2, 10]]
    const expected = [2]
    const actual = intersection(...arrays)
    expect(actual).toEqual(expected)
  })
})
