import padNumberRight from './padNumberRight'

describe('#padNumberRight', () => {
  it('should pad a number to the right', () => {
    const actual = padNumberRight('1', 5)
    expect(actual).toBe('10000')
  })
})
