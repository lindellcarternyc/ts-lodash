import initial from './initial'

describe('#initial', () => {
  it('should return all but the last item in an array', () => {
    const items = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4]
    expect(initial(items)).toEqual(expected)
  })

  it('should return an empty array if there is only one item', () => {
    expect(initial(['a'])).toEqual([])
  })
})
