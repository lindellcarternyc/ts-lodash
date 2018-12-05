import fill from './fill'

describe('#fill', () => {
  it('should fill an array with a value', () => {
    const array = [1, 2, 3, 4]
    fill(array, 'a')
    expect(array).toEqual(['a', 'a', 'a', 'a'])
  })

  it('should fill array made from constructor', () => {
    const filled = fill(Array(3), 'a')
    expect(filled).toEqual(['a', 'a', 'a'])
  })

  it('should fill from start >= 0 to end of array', () => {
    const array = [1, 2, 3, 4, 5]
    const expected = [1, 2, '*', '*', '*']
    fill(array, '*', 2)
    expect(array).toEqual(expected)
  })

  it('should fill up until but not including end parameter', () => {
    const array = '12345'.split('')
    const expected = ['1', 1, 1, 1, '5']
    fill(array, 1, 1, 4)
    expect(array).toEqual(expected)
  })
})
