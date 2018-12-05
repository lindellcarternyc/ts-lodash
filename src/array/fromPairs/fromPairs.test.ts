import fromPairs from './fromPairs'

describe('#fromPairs', () => {
  it('should return an object', () => {
    expect(fromPairs([])).toEqual({})
  })

  it('should return an object composed of key-value pairs', () => {
    const expected = { a: 1, b: 2 }
    const actual = fromPairs([['a', 1], ['b', 2]])
    expect(actual).toEqual(expected)
  })
})