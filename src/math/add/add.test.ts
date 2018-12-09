import add from './add'

describe('#add', () => {
  it('should add two numbers', () => {
    const actual = add(1, 2)
    expect(actual).toEqual(3)
  })
})
