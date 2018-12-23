import takeRightWhile from './takeRightWhile'

describe('#takeRightWhile', () => {
  interface IUser {
    name: string
    active: boolean
  }

  const Users: IUser[] = [
    {
      name: 'barney',
      active: true,
    },
    {
      name: 'fred',
      active: false,
    },
    {
      name: 'pebbles',
      active: false,
    },
  ]

  it('should return an array of objects while the predicate returns true', () => {
    const expected1 = takeRightWhile(Users, user => !user.active)
    expect(expected1).toEqual(Users.slice(1))
  })

  it('accepts a matches object', () => {
    expect(takeRightWhile(Users, { name: 'pebbles', active: false })).toEqual(Users.slice(Users.length - 1))
  })

  it('should accept a match prop argument', () => {
    const expectedUsers = takeRightWhile(Users, ['active', false])
    expect(expectedUsers).toEqual(Users.slice(1))
  })

  it('should accept a property name for a truthy value', () => {
    const expectedUsers = takeRightWhile(Users, 'active')
    expect(expectedUsers).toEqual([])
  })
})
