import { uniqWith } from './uniqWith'

describe('#uniqWith', () => {
  const users = [{
    name: 'lindell'
  }, {
    name: 'lindell'
  }, {
    name: 'oliver'
  }]

  it('should return unique elements using a comparator function', () => {
    const expectedUsers = [{name: 'lindell'}, {name: 'oliver'}]
    const actualUsers = uniqWith(users, (user1, user2) => {
      return user1.name === user2.name
    })
    expect(actualUsers).toEqual(expectedUsers)
  })
})