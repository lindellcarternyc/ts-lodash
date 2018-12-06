import pullAt from './pullAt'

describe('#pullAt', () => {
  const items = 'abcdefghijk'.split('')
  it('should return two arrays', () => {
    const [remaining, pulled] = pullAt(items, 0)
    expect(remaining).toBeInstanceOf(Array)
    expect(pulled).toBeInstanceOf(Array)
  })

  it('should pull one element', () => {
    const expected = [
      items.slice(1),
      [items[0]]
    ]
    const actual = pullAt(items, 0)
    expect(actual[0]).toEqual(expected[0])
    expect(actual[1]).toEqual(expected[1])
  })

  it('should pull multiple items', () => {
    const expected: [string[], string[]] = [
      ['a', 'c', 'e', 'h', 'i', 'j', 'k'],
      ['b', 'd', 'f', 'g']
    ]

    const actual = pullAt(items, [1, 3, 5, 6])
    expect(actual).toEqual(expected)
  })
})