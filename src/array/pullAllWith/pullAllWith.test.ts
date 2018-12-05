import pullAllWith from './pullAllWith'

describe('#pullAllWith', () => {
  it('should pull all items using a comparator', () => {
    const items = [
      {
        username: 'lindell',
        password: '123',
      },
      {
        username: 'oliver',
        password: 'asshat',
      },
    ]

    const values = [
      {
        username: '',
        password: 'asshat',
      },
    ]

    const expected = [
      {
        username: 'lindell',
        password: '123',
      },
    ]

    const actual = pullAllWith(items, values, (val1, val2) => {
      return val1.password === val2.password
    })

    expect(actual).toEqual(expected)
  })
})
