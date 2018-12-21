import { handleUniq, uniq } from './uniq'

const Numbers = [ 1, 2, 3, 4, 5, 5, 4, 2]
const Strings = [ 'a', 'b', 'a', 'a', 'b', 'c' ]
const Users = [{
  name: 'lindell'
}, {
  name: 'lindell'
}, {
  name: 'oliver'
}]

describe('#handleUniq', () => {
  it('should work for numbers ', () => {
    const expectedNumbers = [1, 2, 3, 4, 5]
    const expectedMap = expectedNumbers.reduce<{[key: string]: true}>((res, item) => { 
      return {
        ...res,
        [JSON.stringify(item)]: true
      }
    }, { })
    
    const [ actualNumbers, actualMap ] = handleUniq(Numbers)
    expect(actualNumbers).toEqual(expectedNumbers)
    expect(actualMap).toMatchObject(expectedMap)
  })

  it('should work for strings', () => {
    const expectedStrings = ['a', 'b', 'c']
    const expectedMap = expectedStrings.reduce((res, item) => ({ ...res, [JSON.stringify(item)]: true }), { })
    const [ actualStrings, actualMap ] = handleUniq(Strings)
    expect(actualStrings).toEqual(expectedStrings)
    expect(actualMap).toMatchObject(expectedMap)
  })

  it('should work for objects', () => {
    const expectedObjects = [Users[0], Users[2]]
    const expectedMap = expectedObjects.reduce((res, item) => { 
      return {
        ...res,
        [JSON.stringify(item)]: true
      }
    }, { })
    const [ actualObjects, actualMap ] = handleUniq(Users)
    expect(actualObjects).toEqual(actualObjects)
    expect(actualMap).toMatchObject(expectedMap)
  })
})