import lowerFirst from './lowerFirst'

describe('#lowerFirst', () => {
  it('should return a string with the first letter lowerecased', () => {
    expect(lowerFirst('Fred')).toBe('fred')
    expect(lowerFirst('FRED')).toBe('fRED')
  })
})
