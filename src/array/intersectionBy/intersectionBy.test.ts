import intersectionBy from './intersectionBy'

describe('#intersectionBy', () => {
  const floatArrays = [
    [1.1, 2.2, 3.4],
    [1.4, 5.8]
  ]

  it('should return an array', () => {
    expect(intersectionBy(floatArrays, (n) => n)).toBeInstanceOf(Array)
  })

  it('should find the intersection using a transform function', () => {
    const expected = [1.1]
    const actual = intersectionBy(floatArrays, Math.floor)
    expect(actual).toEqual(expected)
  })

  it('should find the intersection using a property name', () => {
    const objects = [
      [{x: 1}],
      [{x: 1}, {x: 2}]
    ]

    const expected = [{x: 1}]
    const actual = intersectionBy(objects, 'x')
    expect(actual).toEqual(expected)
  })
})