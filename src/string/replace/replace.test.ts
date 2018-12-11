import replace from './replace'

describe('#replace', () => {
  it('should replace a string with another string', () => {
    const input = 'Hi Fred!'
    const expected = 'Hi Barney!'
    const actual = replace(input, 'Fred', 'Barney')
    expect(actual).toBe(expected)
  })

  it('should accept a regexp match', () => {
    const input = 'hello123'
    const expected = 'hello@@@'
    const actual = replace(input, /\d/g, '@')
    expect(actual).toBe(expected)
  })

  it('should accept a function replacement', () => {
    const input = 'hello'
    const expected = 'h(e)ll(o)'
    const actual = replace(input, /[aeiou]/g, s => `(${s})`)
    expect(actual).toBe(expected)
  })
})
