import remove from './remove'

describe('#remove', () => {
  it('should return two arrays', () => {
    expect(remove([], x => x)).toBeInstanceOf(Array)
  })

  it('should remove values that return true', () => {
    const numbers = [1, 2, 3, 4]
    const evens = [2, 4]
    const odds = [1, 3]
    const actual = remove(numbers, n => n % 2 === 0)
    expect(actual).toEqual([odds, evens])
  })
})
