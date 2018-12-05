import findLastIndex from './findLastIndex'

describe('#findLastIndex', () => {
  interface IUser {
    username: string
    active: boolean
  }

  const TestUsers: IUser[] = [{
    username: 'barney', active: true
  }, {
    username: 'fred', active: false
  }, {
    username: 'pebbles', active: false
  }]
  it('should return the last index for which a pred func returns true', () => {
    const idx = findLastIndex(TestUsers, (user) => user.username === 'pebbles')
    expect(idx).toBe(2)
  })

  it('should return the last index of an item that matches target object', () => {
    const idx = findLastIndex(TestUsers, { active: true })
    expect(idx).toBe(0)
  })

  it('should return the last index that matches a property description', () => {
    const idx = findLastIndex(TestUsers, ['active', false])
    expect(idx).toBe(2)
  })

  it('should return the last index of an item that has a truthy value for the key', () => {
    const idx = findLastIndex(TestUsers, 'active')
    expect(idx).toBe(0)
  })

  it('should return -1 if no item is found', () => {
    const idx = findLastIndex(TestUsers, (user: IUser) => user.username === 'hello')
    expect(idx).toBe(-1)
  })

  it('should return the last index before or at fromIndex param', () => {
    const idx = findLastIndex(TestUsers, (user: IUser) => !user.active, 1)
    expect(idx).toBe(1)
  })
})