import flattenDeep from './flattenDeep'

describe('#flatten deep', () => {
  it('should return an array', () => {
    expect(flattenDeep([])).toBeInstanceOf(Array)
  })

  it('should return a flat array', () => {
    const input = [1, 2, 3]
    const actual = flattenDeep(input)
    expect(actual).toEqual(input)
  })

  it('should flatten one level', () => {
    const input = [1, [2, 3]]
    const expected = [1, 2, 3]
    const actual = flattenDeep(input)
    expect(actual).toEqual(expected)
  })

  it('should flatten two levels', () => {
    const input = [1, [2, 3], [[4], [5], [6, 7]]]
    const expected = [1, 2, 3, 4, 5, 6, 7]
    const actual = flattenDeep(input) as number[]
    expect(actual).toEqual(expected)
  })

  it('should flatten three levels', () => {
    const input = [1, [2, 2], [[3, 3, 3]], [[[4, 4, 4, 4]]]]
    const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
    const actual = flattenDeep(input) as number[]
    expect(actual).toEqual(expected)
  })
})
