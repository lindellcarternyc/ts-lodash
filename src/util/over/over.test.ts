import over from './over'

import { over as _over } from 'lodash'

describe('#over', () => {
  it('should return a function that defaults to identity', () => {
    const caller = over()
    expect(caller(1, 2, 3)).toEqual([[1, 2, 3]])
  })

  it('should map a function', () => {
    const caller = over<number | string>([Math.max, Math.min, (...args: number[]) => args[0].toString()])
    const actual = caller(1, 2, 3, -4)
    expect(actual).toEqual([3, -4, '1'])
  })

  it('should combine values', () => {
    const c = over<number[] | string>([
      (...nums: number[]) => nums.map(n => n * 2 + 5),
      (...nums: number[]) => nums.toString(),
    ])
    const items = [1, 2, 3, 4]
    const expected = [items.map(i => i * 2 + 5), '1,2,3,4']
    const actual = c(...items)
    expect(actual).toEqual(expected)
  })
})
