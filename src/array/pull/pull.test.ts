import pull from './pull'

describe('#pull', () => {
  it('removes all occurences of items from an array', () => {
    const items = ['a', 'a', 'b', 'c', 'c', 'x']
    const expected = ['b', 'x']
    const actual = pull(items, 'a', 'c')
    expect(actual).toEqual(expected)
  })
})