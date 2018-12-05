import pullAllBy from './pullAllBy'

describe('#pullAllBy', () => {
  it('should pull all items using transform func', () => {
    const array = [1.1, 2.1]
    const values = [1.3, 5.6]
    const expected = [2.1]

    const actual = pullAllBy(array, values, Math.floor)
    expect(actual).toEqual(expected)
  })

  it('should pull all items using property name', () => {
    const array = [
      {
        x: 1,
        y: 2,
      },
      {
        x: 3,
        y: 2,
      },
    ]

    const values = [{ x: 1, y: 3 }]

    const expected = [{ x: 3, y: 2 }]
    const actual = pullAllBy(array, values, 'x')

    expect(actual).toEqual(expected)
  })
})
