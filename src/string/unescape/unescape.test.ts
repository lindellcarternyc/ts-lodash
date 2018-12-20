import unescape, { isEscapedCharacter } from './unescape'

describe('#isEscapedCharater', () => {
  const tests = ['&amp;', '&lt;', '&gt;', '&quot;', '&#39;']

  tests.forEach(test => {
    it(`should recognze ${test} as an escaped char`, () => {
      expect(isEscapedCharacter(test)).toBe(true)
    })
  })

  it('should return false if the string is not an escaped sequence', () => {
    expect(isEscapedCharacter('hello')).toBe(false)
  })
})

describe('#unescape', () => {
  it('should return a string with escaped characters unescaped', () => {
    const input = 'fred, barney, &amp; pebbles'
    const expected = 'fred, barney, & pebbles'
    const actual = unescape(input)
    expect(actual).toBe(expected)

    const i2 = '&amp;&gt;&lt;'
    const e2 = '&><'
    const a2 = unescape(i2)
    expect(a2).toBe(e2)
  })
})
