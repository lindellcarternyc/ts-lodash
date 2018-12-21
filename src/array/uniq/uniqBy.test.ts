import { uniqBy } from './uniqBy'

describe('#uniqBy', () => {
  it('should accept a function', () => {
    const Floats = [1.1, 1.2, 2.5]
    const expectedFloats = [1.1, 2.5]
    const actualFloats = uniqBy(Floats, Math.floor)
    expect(actualFloats).toEqual(expectedFloats)
  })

  it('should accept the property shorthand', () => {
    const objects = [{ name: 'lindell' }, { name: 'lindell' }]
    const expectedObjects = [{name: 'lindell'}]
    const actualObjects = uniqBy(objects, 'name')
    expect(actualObjects).toEqual(expectedObjects)
  })
})