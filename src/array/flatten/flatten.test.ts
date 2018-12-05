import flatten from './flatten'

describe('#flatten', () => {
  it('should return an array', () => {
    expect(flatten([])).toBeInstanceOf(Array)
  })

  it('should flatten a nested array', () => {
    const input = [1, 2, [1, 2]]
    const expected = [1, 2, 1, 2]
    const actual = flatten(input)
    expect(actual).toEqual(expected)
  })

  it('should flatten double nested array to one level', () => {
    const input = [1, 2, [[1, 2], [1, 2]], [1, 2]]
    const expected = [1, 2, [1, 2], [1, 2], 1, 2]
    const actual = flatten(input)
    expect(actual).toEqual(expected)
  })

  it('should flatten triple nested array to double nested', () => {
    const input = [1, [1, 2], [[1, 2, 3], [4, 5, 6]], [[[1, 2, 3], [1], [2], [3]]]]
    const expected = [1, 1, 2, [1, 2, 3], [4, 5, 6], [[1, 2, 3], [1], [2], [3]]]
    const actual = flatten(input)
    expect(actual).toEqual(expected)
  })
})
