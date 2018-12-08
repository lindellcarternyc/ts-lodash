import property from './property'

import { property as _prop } from 'lodash'

describe('#path', () => {
  it('should return a function', () => {
    expect(typeof property('a')).toBe('function')
  })

  it('should find a property at the root level', () => {
    const f = property('a')
    const obj = { a : 2 }
    expect(f(obj)).toBe(2)
  })

  it('should find a nested prop', () => {
    const caller = property('a.b')
    const obj = { a: { b: 2 } }
    const actual = caller(obj)
    expect(actual).toBe(2)
  })

  interface IObj {
    a: number
    b: {
      c: number
      d: string
    }
  }
  const objects: IObj[] = [{
    a: 1,
    b: {
      c: 2,
      d: 'hello'
    }
  }, {
    a: 2,
    b: {
      c: 3,
      d: 'world'
    }
  }]
  it('can used in a map function', () => {
    const mapCaller = property(['b', 'd'])
    const actual = objects.map(mapCaller)
    expect(actual).toEqual(['hello', 'world'])
  })
})
