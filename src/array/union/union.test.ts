import union from './union'

describe('#union', () => {
  it('should accept two or more arrays', () => {
    expect(() => union([1, 2, 3], [1, 2, 3])).not.toThrow()
    expect(() => union([1, 2, 3], [2, 3, 4], [4, 5, 6])).not.toThrow()
  })

  it('should return the unique elements of one array', () => {
    expect(union([1, 2, 2, 3])).toEqual([1, 2, 3])
  })

  it('should return the union of several arrays', () => {
    const a1 = [1, 2, 3]
    const a2 = [2, 3, 4]
    const a3 = [1, 5, 6, 7]
    const expectedUnion = [ 1, 2, 3, 4, 5, 6, 7 ]
    const actualUnion = union(a1, a2, a3)
    expect(expectedUnion).toEqual(actualUnion)
  })

  it('should work on objects', () => {
    interface IUser {
      name: string
    }

    const U1: IUser[] = [{ name: 'hello' }, { name: 'world' }]
    const U2: IUser[] = [{ name: 'hello' }, { name: 'food' }]
    const expectedU = [{ name: 'hello' }, { name: 'world' }, { name: 'food' }]
    const actualU = union(U1, U2)
    expect(actualU).toEqual(expectedU)
  })
})