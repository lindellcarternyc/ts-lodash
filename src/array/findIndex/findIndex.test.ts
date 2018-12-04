import findIndex from './findIndex'

describe('#findIndex', () => {
  interface IUser {
    user: string
    active: boolean
  }

  const TestUsers = [{
    user: 'barney', active: false,
  }, {
    user: 'fred', active: false
  }, {
    user: 'pebbles', active: true
  }]

  it('should return a number', () => {
    const result = findIndex(TestUsers, _ => true)
    expect(typeof result).toBe('number')
  })

  it('should return the first index for which a predicate function returns true', () => {
    const index = findIndex(TestUsers, (o: IUser) => o.active)
    expect(index).toEqual(2)
  })

  it('should return the first index where the item matches the object prop', () => {
    const index = findIndex(TestUsers, { user: 'fred', active: false })
    expect(index).toBe(1)
  })

  it('should return the index of the first item that matches the property', () => {
    const index = findIndex(TestUsers, ['active', false])
    expect(index).toBe(0)
  })

  it('should return the first index where the prop name is a truthy value', () => {
    const index = findIndex(TestUsers, 'active')
    expect(index).toBe(2)
  })

  it('should return -1 if no item is present', () => {
    const index = findIndex(TestUsers, { user: 'holla' })
    expect(index).toBe(-1)
  })

  it('should return the first index after fromIndex param', () => {
    const index = findIndex(TestUsers, (obj: IUser) => !obj.active, 1)
    expect(index).toBe(1)
  })
})