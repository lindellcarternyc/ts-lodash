import round from './round'

describe('#round', () => {
  it('should round a number', () => {
    const a = round(4.006)
    expect(a).toEqual(4)
  })

  it('should round a number (pos precision)', () => {
    const a = round(4.006, 2)
    expect(a).toEqual(4.01)
  })

  it('should round a number (neg presition)', () => {
    const a = round(4060, -2)
    expect(a).toEqual(4100)
  })
})
