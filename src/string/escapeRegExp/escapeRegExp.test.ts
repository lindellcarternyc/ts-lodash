import escapeRegExp from './escapeRegExp'

import { escapeRegExp as _e } from 'lodash'

describe('#escapeRegExp', () => {
  const inputs = '^$.*+?()[]{}| '.split('')
  inputs.forEach(input => {
    it(`should escape ${input}`, () => {
      const expected = _e(input)
      const actual = escapeRegExp(input)
      expect(actual).toBe(expected)
    })
  })

  it('should escape a string', () => {
    const input = '[lodash](https://lodash.com/)'
    const expected = _e(input)
    const actual = escapeRegExp(input)
    expect(actual).toBe(expected)
  })
})
