import split from './split'

describe('#split', () => {
  it('should split a string and return all of the characters by default', () => {
    const str = 'a-b-c'
    const expected = ['a', 'b', 'c']
    const actual = split(str, '-')
    expect(actual).toEqual(expected)
  })

  it('should limit it to the first few items', () => {
    const str = 'a-b-c-d-e'
    expect(split(str, '-', 2)).toEqual(['a', 'b'])
  })
})
