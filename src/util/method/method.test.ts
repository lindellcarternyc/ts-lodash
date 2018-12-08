import method from './method'

describe('#method', () => {
  it('should return a function', () => {
    const func = method('')
    expect(typeof func).toBe('function')
  })

  it('should find a function at the root level', () => {
    const obj = { a: () => 2 }
    const func = method('a')
    const actual = func(obj)
    expect(actual).toBe(2)
  })

  it('should find a nested function', () => {
    const obj = { a: { b: () => 'c' } }
    const f1 = method(['a', 'b'])
    expect(f1(obj)).toBe('c')
    const f2 = method('a.b')
    expect(f2(obj)).toBe('c')
  })

  interface IObj {
    name: string
    f: () => string
  }
  const objects: IObj[] = [
    {
      f: () => 'obj1',
      name: 'hello',
    },
    {
      f: () => 'obj2',
      name: 'world',
    },
  ]

  it('should be usable in a map function', () => {
    const expected = ['obj1', 'obj2']
    const actual = objects.map<string>(method('f'))
    expect(actual).toEqual(expected)
  })

  it('can be used in filter', () => {
    const expected = [objects[0]]
    const actual = objects.filter(o => {
      return method<IObj, string>('f')(o) === 'obj1'
    })
    expect(actual).toEqual(expected)
  })

  it('accepts args', () => {
    const obj = {
      f: (name: string) => `${name.toUpperCase()}`,
    }

    const f = method<typeof obj, string>('f')
    const actual = f(obj, 'hello')
    expect(actual).toBe('HELLO')
  })
})
