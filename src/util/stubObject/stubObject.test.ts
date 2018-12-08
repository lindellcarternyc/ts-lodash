import stubObject from './stubObject'

describe('#stubObject', () => {
  it('should return an empty object', () => {
    const obj = stubObject()
    expect(obj).toEqual({})

    const obj2 = stubObject()
    expect(obj === obj2).toBe(false)
  })
})
