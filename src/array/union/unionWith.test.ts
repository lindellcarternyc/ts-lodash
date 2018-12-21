import unionWith from './unionWith'

describe('#unionWith', () => {
  interface IObj {
    x: number
    y: number
  }

  const objs1: IObj[] = [{
    x: 1, y: 2
  }, {
    x: 1, y: 12
  }]

  const objs2: IObj[] = [{
    x: 1, y: 2
  }, {
    x: 0, y: 12
  }]

  const objs3: IObj[] = [{
    x: 12, y: 1
  }]

  const expectedObjs: IObj[] = [{
    x: 1, y: 2
  }, {
    x: 1, y: 12
  }, {
    x: 0, y: 12
  }, {
    x: 12, y: 1
  }]

  it('should accept arrays and a comparator function', () => {
    const actualObjs = unionWith(objs1, [objs2, objs3], (o1, o2) => o1.x === o2.x && o1.y === o2.y)
    expect(actualObjs).toEqual(expectedObjs)
  })
})