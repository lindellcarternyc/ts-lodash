import { dropWhile as _dropWhile } from 'lodash'

import dropWhile from './dropWhile'

describe('#dropWhile', () => {
  const users = [
    {
      user: 'barney',
      active: false,
    },
    {
      user: 'fred',
      active: false,
    },
    {
      user: 'pebbles',
      active: true,
    },
  ]

  it('should drop while a function returns true', () => {
    const expected = _dropWhile(users, u => !u.active)
    const actual = dropWhile(users, u => !u.active)
    expect(actual).toEqual(expected)
  })

  it('should drop items while they match target object', () => {
    const expected = _dropWhile(users, { user: 'barney', active: false })
    const actual = dropWhile(users, { user: 'barney', active: false })
    expect(actual).toEqual(expected)
  })

  it('should drop items while they match a property', () => {
    const prop = ['active', false] as ['active', boolean]
    const expected = _dropWhile(users, prop)
    const actual = dropWhile(users, prop)
    expect(actual).toEqual(expected)
  })

  it('should handle property names', () => {
    const expected = _dropWhile(users, 'active')
    const actual = dropWhile(users, 'active')
    expect(actual).toEqual(expected)
  })
})
