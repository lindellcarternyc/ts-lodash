import pullAll from './pullAll'

describe('#pullAll', () => {
  it('should remove all items from array included in values', () => {
    const items = [1, 2, 3, 3, 5]
    const expected = [1]
    const actual = pullAll(items, [2, 3, 5])
    expect(actual).toEqual(expected)
  })
})
