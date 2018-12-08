import stubArray from './stubArray'

describe('#stubArray', () => {
  it('should return a new empty array', () => {
    const a1 = stubArray<number>()
    expect(a1).toEqual([])

    const a2 = stubArray()
    expect(a2).toEqual([])

    expect(a1).toEqual(a2)
    expect(a1 === a2).toEqual(false)
  })
})
