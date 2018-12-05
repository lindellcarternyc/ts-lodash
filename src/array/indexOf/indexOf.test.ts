import indexOf from './indexOf'

describe('#indexOf', () => {
  const items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  it('should find the index of items in the array', () => {
    const tests = [
      {
        item: 1,
        index: 0,
      },
      {
        item: 4,
        index: 3,
      },
    ]

    tests.forEach(t => {
      const idx = indexOf(items, t.item)
      expect(idx).toBe(t.index)
    })
  })

  it('should return -1 if the item is not found', () => {
    expect(indexOf(items, 10)).toBe(-1)
  })

  it('should return first first index after fromIndex', () => {
    expect(indexOf(items, 1, 1)).toBe(5)
  })

  it('should treat negative fromIndex params as offset from end of array', () => {
    const expectedIdx = 7
    const idx = indexOf(items, 3, -5)
    expect(idx).toBe(expectedIdx)
  })
})
