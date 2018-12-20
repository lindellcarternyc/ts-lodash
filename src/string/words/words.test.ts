import words from './words'

describe('#words', () => {
  it('should split a string att all non-word chars', () => {
    const input = 'fred, barney, & pebbles'
    const expectd = ['fred', 'barney', 'pebbles']
    const actual = words(input)
    expect(actual).toEqual(expectd)
  })

  it('should split using a regex', () => {
    const input = 'word, word, & word'
    const expected = ['word', 'word', '&', 'word']
    const actual = words(input, /[^q, ]+/g)
    expect(actual).toEqual(expected)
  })
})
