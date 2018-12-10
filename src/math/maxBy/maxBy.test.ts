import maxBy from './maxBy'

describe('#maxBy', () => {
  interface IUser {
    username: string
    friends: string[]
    likes: number
  }

  const users: IUser[] = [
    {
      username: 'lindell',
      friends: ['friend1'],
      likes: 4,
    },
    {
      username: 'username',
      friends: [],
      likes: 10,
    },
  ]

  it('should return the max object using a function', () => {
    const actual = maxBy(users, user => user.friends.length)
    expect(actual).toEqual(users[0])
  })

  it('should return the max using a prop that is a number', () => {
    const actual = maxBy(users, 'likes')
  })
})
