import reverse from './reverse'

describe('#revese', () => {
  it('should return an array reversed', () => {
    const a1 = [1, 2, 3, 4, 5]
    const a2 = reverse(a1)
    expect(a2).toEqual(a1)
  })
})