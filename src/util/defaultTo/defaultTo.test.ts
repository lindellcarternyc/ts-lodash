import defaultTo from './defaultTo'

describe('#defaultTo', () => {
  it('should return the value if it is not null | NaN | undefined', () => {
    expect(defaultTo(1, 10)).toBe(1)
  })

  it('should return the default value if null/undefined/NaN', () => {
    expect(defaultTo(null, 10)).toBe(10)
    expect(defaultTo(undefined, 'whoops')).toBe('whoops')
    expect(defaultTo(NaN, 'nope')).toBe('nope')
  })
})
