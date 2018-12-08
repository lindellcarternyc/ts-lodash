import stubString from './stubString'

describe('#stubString', () => {
  it('should return an empty string', () => {
    const s = stubString()
    expect(s).toBe('')
  })
})
