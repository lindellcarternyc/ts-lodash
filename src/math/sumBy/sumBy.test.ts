import sumBy from './sumBy'

describe('#sumBy', () => {
  const objects = [
    {
      a: 1,
      b: 'hello',
    },
    {
      a: 5,
      b: 'world',
    },
  ]

  it('should return the sum using a map function', () => {
    const actual = sumBy(objects, o => o.b.length)
    expect(actual).toBe(10)
  })

  it('should return the sum using num props', () => {
    const actual = sumBy(objects, 'a')
    expect(actual).toBe(6)
  })
})
