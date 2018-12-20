import truncate from './truncate'

describe('#truncate', () => {
  const InputString = 'hi-diddly-ho there, neighborino'

  it('should return a string if it is shorter than 30 chars by default', () => {
    const shortStr = InputString.slice(0, 5)
    const expected = InputString.slice(0, 5)
    const actual = truncate(shortStr)
    expect(actual).toBe(expected)
  })

  it('should return a truncated string according to the defaults', () => {
    const expected = InputString.slice(0, 27) + '...'
    const actual = truncate(InputString)
    expect(actual).toBe(expected)
  })

  it('should accept an alternate ending', () => {
    const expected = InputString.slice(0, 24) + ' [...]'
    const actual = truncate(InputString, {
      omission: ' [...]',
    })
    expect(actual).toBe(expected)
  })

  it('should accept a length parameter', () => {
    const length = 15
    const expected = InputString.slice(0, 12) + '...'
    const actual = truncate(InputString, {
      length,
    })
    expect(actual).toBe(expected)
  })

  it('should accept a length(number) and separator(string)', () => {
    const separator = ' '
    const length = 24
    const expected = InputString.slice(0, 19) + '...'
    const actual = truncate(InputString, {
      length,
      separator,
    })

    expect(actual).toBe(expected)
  })

  it('should accept a length and RegExp as separator', () => {
    const expected = InputString.slice(0, 24) + ' [...]'
    const actual = truncate(InputString, {
      omission: ' [...]',
    })
    expect(actual).toBe(expected)
  })
})
