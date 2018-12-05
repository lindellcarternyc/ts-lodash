import intersectionWith from './intersectionWith'

describe('#intersectionWith', () => {
  it('should find the intersection using the intercluded comparator function', () => {
    const objects = [{
      x: 1, y: 2
    }, {
      x: 2, y: 1
    }]

    const others = [{
      x: 1, y: 1
    }, {
      y: 2, x: 1
    }]

    const expected = [{x: 1, y: 2}]

    const actual = intersectionWith([objects, others], (o1, o2) => {
      return o1.x === o2.x && o1.y === o2.y
    })

    expect(actual).toEqual(expected)
  })
})