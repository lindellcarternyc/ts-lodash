import takeWhile from './takeWhile'

describe('#takeWhile', () => {
  interface IUser {
    name: string
    active: boolean
  }

  const Users: IUser[] = [{
    name: 'barney',
    active: false
  }, {
    name: 'fred',
    active: false
  }, {
    name: 'pebbles',
    active: true
  }]

  it('should accept a function', () => {
    const expectedUsers = takeWhile(Users, u => !u.active)
    expect(expectedUsers).toEqual(Users.slice(0, 2))
  })

  it('should accept a matching object', () => {
    const expectedUsers = takeWhile(Users, { name: 'barney', active: false })
    expect(expectedUsers).toEqual([Users[0]])
  })

  it('should accept a matches param value', () => {
    const expectedUsers = takeWhile(Users, ['active', false])
    expect(expectedUsers).toEqual(Users.slice(0, 2))
  })

  it('should accept a property name', () => {
    const expectedUsers = takeWhile(Users, 'active')
    expect(expectedUsers).toEqual([])
  })

})