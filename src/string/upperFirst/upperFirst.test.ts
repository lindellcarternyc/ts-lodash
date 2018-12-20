import upperFirst from './upperFirst'

describe('#upperFirst', () => {
  it('should return a string with the first letter capitalized', () => {
    expect(upperFirst('fred')).toBe('Fred')
    expect(upperFirst('FRED')).toBe('FRED')
  })
})
