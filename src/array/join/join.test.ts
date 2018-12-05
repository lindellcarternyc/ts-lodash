import join from './join'

describe('#join', () => {
  const items = [1, 2, 3]
  it('should join an array with a separator', () => {
    const expected = '1-2-3'
    const actual = join(items, '-')
    expect(actual).toEqual(expected)
  })

  it('should default to joining them with a comma', () => {
    const expected = '1,2,3'
    const actual = join(items)
    expect(actual).toEqual(expected)
  })
})
