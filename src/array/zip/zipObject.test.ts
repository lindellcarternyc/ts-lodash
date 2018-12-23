import zipObject from './zipObject'

describe('#zipObject', () => {
  it('should create a simple object', () => {
    const keys = ['a', 'b']
    const numbers = [1, 2]
    const obj = { 'a': 1, 'b': 2 }
    const actual = zipObject(keys, numbers)
    expect(actual).toEqual(obj)
  })

  it('should work with other objects', () => {
    const keys = ['a', 'b', 'c']
    const values = [{user: 'lindell'}, 3, true]
    const expectedZipObj = {
      'a': { user: 'lindell' },
      'b': 3,
      'c': true
    }
    const actual = zipObject(keys, values)
    expect(actual).toEqual(expectedZipObj)
  })
})