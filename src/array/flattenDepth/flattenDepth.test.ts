import flattenDepth from './flattenDepth'

describe('#flattenDepth', () => {
  it('should return an array', () => {
    expect(flattenDepth([])).toBeInstanceOf(Array)
  })

  it('should flatten an array one level', () => {
    const input = [1, [1, 2], [[1]]]
    const expected = [1, 1, 2, [1]]
    const actual = flattenDepth(input, 1)
    expect(actual).toEqual(expected)
  })

  it('should flatten an array two levels', () => {
    const input = [1, [1, 2], [[1], [2], [1, 2, 3]]]
    const expected = [1, 1, 2, 1, 2, 1, 2, 3]
    const actual = flattenDepth(input, 2)
    expect(actual).toEqual(expected)
  })

  it('should treat default 0s and negative numbers to 1', () => {
    const input = [1, [1, 2], [[1], [2], [3]]]
    const expected = [1, 1, 2, [1], [2], [3]]
    expect(flattenDepth(input, 0)).toEqual(expected)
    expect(flattenDepth(input, -5)).toEqual(expected)
  })
})
