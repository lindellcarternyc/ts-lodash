import matchesProperty from './matchesProperty'

describe('#matches', () => {
  it('should return a function', () => {
    const func = matchesProperty('a', 4)
    expect(typeof func).toBe('function')
  })

  it('should return a function that returns true if an object has a matching property', () => {
    const func = matchesProperty('username', 'lindell')
    const actual = func({ username: 'lindell' })
    expect(actual).toBe(true)
  })

  const users = [
    {
      username: 'lindell',
      password: 'password',
      friends: ['hello'],
    },
    {
      username: 'lindell1',
      password: 'password',
      friends: [],
    },
  ]

  it('can be used to filter', () => {
    const actual = users.filter(matchesProperty('username', 'lindell'))
    expect(actual.length).toBe(1)
  })

  it('can be used to map', () => {
    const actual = users.map(user => {
      return matchesProperty('username', 'lindell')(user) ? user : null
    })
    expect(actual).toEqual([users[0], null])
  })

  it('can be used in reduce', () => {
    const func = matchesProperty('username', 'lindell')
    const reducer = (total: number, user: {}) => (func(user) ? total + 1 : total)
    const actual = users.reduce(reducer, 0)
    expect(actual).toBe(1)
  })

  it('accepts an array for path', () => {
    const func = matchesProperty(['friends', 'length'], 1)
    expect(func(users[0])).toBe(true)
  })

  it('accepts dot separated paths', () => {
    const actual = users.filter(matchesProperty('friends.length', 1))
    expect(actual.length).toBe(1)
  })

  it('works on nested objects', () => {
    interface INote {
      name: string
      duration: {
        base: string
        dots: number
      }
    }

    const notes: INote[] = [
      {
        name: '1',
        duration: { base: 'a', dots: 2 },
      },
      {
        name: '2',
        duration: { base: 'b', dots: 4 },
      },
    ]

    const filteredByDurationBase = notes.filter(matchesProperty('duration.base', 'a'))
    expect(filteredByDurationBase).toEqual([notes[0]])

    const map = (note: INote) => (matchesProperty('duration.dots', 2)(note) ? note.duration : null)

    const mapped = notes.map(map)
    expect(mapped).toEqual([notes[0].duration, null])

    const reducer = (total: number, note: INote) => {
      if (matchesProperty('duration.base', 'b')(note)) {
        return total + note.duration.dots
      }
      return total
    }
    const actual = notes.reduce(reducer, 0)
    expect(actual).toBe(4)
  })
})
