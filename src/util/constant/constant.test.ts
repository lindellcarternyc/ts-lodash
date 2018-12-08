import constant from './constant'

describe('#constant', () => {
  it('should create a function', () => {
    expect(typeof constant(1)).toBe('function')
  })

  it('should return return a function that returns the initial value', () => {
    const value = { username: 'lindell', password: 'password' }
    const func = constant(value)
    const actual = func()
    expect(actual).toEqual(value)
  })
})
