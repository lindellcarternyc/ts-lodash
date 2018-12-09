import minBy from './minBy'

describe('#minBy', () => {
  interface IUser {
    username: string
    numFriends: number
  }

  const users: IUser[] = [{
    username: 'user1',
    numFriends: 10
  }, {
    username: 'user',
    numFriends: 5
  }]

  it('should find min object using function', () => {
    const actual = minBy(users, user => user.username.length)
    expect(actual).toEqual(users[1])
  })

  it('should fin min object using property name', () => {
    const actual = minBy(users, 'numFriends')
    expect(actual).toEqual(users[1])
  })
})
