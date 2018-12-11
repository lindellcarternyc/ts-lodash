import repeat from './repeat'

describe('#repeat', () => {
  it('should repeat a string n times', () => {
    expect(repeat('h', 2)).toBe('hh')
    expect(repeat('asdfkasfgl', 0)).toBe('')
  })
})
