import unionBy from './unionBy'

describe('#unionBy', () => {
  it('should accept a function', () => {
    const floats1 = [2.1]
    const floats2 = [1.2, 2.3]
    const expectedFloats = [2.1, 1.2]
    const actualFloats = unionBy(floats1, [floats2], Math.floor)
    expect(actualFloats).toEqual(expectedFloats)
  })

  it('should accept a prop name', () => {
    const objs1 = [{x: 1}, {x: 2}]
    const objs2 = [{x: 10}, {x: 12}]
    const objs3 = [{x: 1}, {x: 14}]
    const expectedObjs = [{x: 1}, {x: 2}, {x: 10}, {x: 12}, {x: 14}]
    const actualObjs = unionBy(objs1, [objs2, objs3], 'x')
    expect(actualObjs).toEqual(expectedObjs)
  })
})