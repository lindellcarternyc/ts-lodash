import clamp from './clamp'

import { clamp as _clamp } from 'lodash'

describe('#clamp', () => {
  it('should clamp a number to min if it is below', () => {
    const expected = 5
    const actual = clamp(0, 5, 10)
    expect(actual).toBe(expected)
  })

  it('should clamp a number to max if it is above max', () => {
    expect(clamp(20, 5, 10)).toBe(10)
  })

  it('should accept params like lodash', () => {
    expect(clamp(-5, 10)).toEqual(0)
    expect(clamp(20, 10)).toEqual(10)
  })

  it('should return the number if it is in the range', () => {
    expect(clamp(20, 0, 30)).toBe(20)
    expect(clamp(10, 50)).toBe(10)
  })
})
