import { dropRightWhile as dRWhile } from 'lodash'

import dropRightWhile from './dropRightWhile'

describe('#dropRightWhile', () => {
  const users = [
    {
      user: 'barney',
      active: true,
    },
    {
      user: 'fred',
      active: false,
    },
    {
      user: 'pebbles',
      active: false,
    },
  ]
  it('should return an array', () => {
    const actual = dropRightWhile(users, u => !u.active)
    expect(actual).toBeInstanceOf(Array)
  })

  it('should drop items from the end while iteree function returns true', () => {
    const expected = [{ user: 'barney', active: true }]
    const actual = dropRightWhile(users, u => !u.active)
    expect(actual).toEqual(expected)
  })

  it('should drop items from the end while matches prop === true', () => {
    const expected = dRWhile(users, { active: true })
    const actual = dropRightWhile(users, { active: true })
    expect(actual).toEqual(expected)
  })

  it('should drop items while it matches a property i.e. ["active", true]', () => {
    const expected = dRWhile(users, ['active', true])
    const actual = dropRightWhile(users, ['active', true])
    expect(actual).toEqual(expected)
  })

  it('should drop items until the objects have the property', () => {
    const expected = dRWhile(users, 'active')
    const actual = dropRightWhile(users, 'active')
    expect(actual).toEqual(expected)
  })
})
