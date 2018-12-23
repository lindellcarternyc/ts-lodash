import tail from './tail'

describe('#tail', () => {
  it('should return all but first element in array', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = [2, 3, 4, 5]
    const actual = tail(arr)
    expect(actual).toEqual(expected)
  })
})
