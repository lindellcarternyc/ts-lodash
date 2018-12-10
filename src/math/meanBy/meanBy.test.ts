import meanBy from './meanBy'

describe('#meanBy', () => {
  interface IObj {
    a: number
    b: {
      c: string
    }
  }

  const objects: IObj[] = [
    {
      a: 5,
      b: { c: 'hello' },
    },
    {
      a: 6,
      b: { c: 'world' },
    },
  ]

  it('should use function to find the mean', () => {
    const actual = meanBy(objects, o => o.a + o.b.c.length)
    expect(actual).toEqual(10.5)
  })

  it('should use the property shorthand', () => {
    const actual = meanBy(objects, 'a')
    expect(actual).toEqual(5.5)
  })
})
