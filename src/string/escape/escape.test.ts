import escape from './escape'

import { escape as _e } from 'lodash'

describe('#escape', () => {
  it('should return a string', () => {
    expect(typeof escape('')).toBe('string')
  })

  it('should escape &', () => {
    const input = 'hello&'
    const expected = 'hello&amp;'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })

  it('should escape <', () => {
    const input = '<hello'
    const expected = '&lt;hello'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })

  it('should escape >', () => {
    const input = '>hello'
    const expected = '&gt;hello'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })

  it("should escape '", () => {
    const input = "'hello"
    const expected = '&#39;hello'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })

  it('should escape "', () => {
    const input = '"hello'
    const expected = '&quot;hello'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })

  it('should escape multiple chars', () => {
    const input = '&<hello"'
    const expected = '&amp;&lt;hello&quot;'
    const actual = escape(input)
    expect(actual).toBe(expected)
  })
})
