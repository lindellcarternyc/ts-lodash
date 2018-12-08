import constant from '../constant'
import times from './times'

describe('#times', () => {
  it('should return default to returning an array of n with length n', () => {
    const arr = times(3)
    expect(arr).toEqual([3, 3, 3])
  })

  it('should accept a function', () => {
    const arr = times(3, constant('x'))
    expect(arr).toEqual(['x', 'x', 'x'])
  })

  it('should accept constructors', () => {
    const arr = times(5, String)
    expect(arr).toEqual('01234'.split(''))
  })
})
