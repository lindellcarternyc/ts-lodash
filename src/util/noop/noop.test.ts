import noop from './noop'

describe('#noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBe(undefined)
  })
})
