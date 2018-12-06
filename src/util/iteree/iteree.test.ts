import iteree from './iteree'

describe('#iteree', () => {
  it('should return a function', () => {
    const actual = iteree()
    expect(typeof actual).toBe('function')
  })

  it('should default to `identity` if no param is provided', () => {
    const func = iteree()
    const obj = { username: 'lindell' }
    const actual = func(obj)
    expect(actual).toEqual(obj)
  })

  it('should call func with appropriate params', () => {
    const func = iteree((n: number) => n.toString())
    const actual = func(4)
    expect(actual).toBe('4')
  })

  it('should accept a `matches object`', () => {
    const func = iteree({username: 'lindell', password: '12345'})
    const actual = func({username: 'lindell', password: '12345'})
    expect(actual).toBe(true)

    expect(func({username: 'hello', password: ''})).toBeFalsy()
  })

  it('should accept a property tuple', () => {
    interface IUser {
      username: string
    }
    const func = iteree<IUser, 'username'>(['username', 'lindell'])
    const user: IUser = { username: 'lindell' }
    expect(func(user)).toBe(true)
  })

  it('should accept a prop name', () => {
    interface IUser {
      username: string
      password: string
    }

    const user: IUser = { username: 'lindell', password: '12345' }
    const func = iteree<IUser, 'username'>('username')
    expect(func(user)).toBe('lindell')
  })
})