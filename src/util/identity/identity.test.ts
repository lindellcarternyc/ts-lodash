import identity from './identity'

describe('#identity', () => {
  it('should return the object passed in', () => {
    expect(identity(2)).toBe(2)
    expect(identity({username: 'lindell'})).toEqual({username: 'lindell'})
  })
})