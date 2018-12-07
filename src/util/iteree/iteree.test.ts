import iteree from './iteree'

describe('#iteree', () => {
  it('should return a function', () => {
    const actual = iteree()
    expect(typeof actual).toBe('function')
  })

  it('should default to the identity function', () => {
    const actual = iteree()(1)
    expect(actual).toBe(1)
  })

  it('should accept a transform function', () => {
    const func = iteree((num: number) => num.toString())
    const actual = func(4)
    expect(actual).toBe('4')
  })

  it('should accept a matches obj', () => {
    const func = iteree({username: 'hello'})
    const actual = func({username: 'hello', password: 'string'})
    expect(actual).toBe(true)
  })

  it('should accept a property name', () => {
    const func = iteree('username')
    const actual = func({username: 'hello'})
    expect(actual).toBe('hello')
  })

  interface IUser {
    username: string
    password: string
    friends: string[]
  }

  const User1: IUser = {
    username: 'lindell',
    password: '12345',
    friends: ['friend 1']
  }

  const User2: IUser = {
    username: 'Oliver',
    password: '12345',
    friends: []
  }

  const Users: IUser[] = [User1, User2]

  it('should work in a map function', () => {
    
    const mappedByPropertyName = Users.map(iteree('username'))
    expect(mappedByPropertyName).toEqual(['lindell', 'Oliver'])
  })

  it('shuold work in a filter function', () => {
    const filtered = Users.filter(iteree({username: 'lindell'}))
    expect(filtered).toEqual([User1])
  })

  it('should accept a prop tuple', () => {
    const func = iteree<IUser>(['username', 'lindell'])
    const actual = func({username: 'lin'})
    expect(actual).toBe(false)

    const filtered = Users.filter(iteree<IUser>(['username', 'lindell']))
    expect(filtered).toHaveLength(1)
  })

  it('should work in a reduce', () => {
    const func = iteree((user: IUser) => user.friends.length)
    const total = (result: number, user: IUser) => result + func(user)
    const actual = Users.reduce(total, 0)
    expect(actual).toBe(1)
  })
})