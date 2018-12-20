import random from './random'

describe('#random', () => {
  it('should return a random integer if isFloat is false', () => {
    const lower = 0
    const upper = 10
    const actual = random(lower, upper, false)
    expect(actual).toBeGreaterThanOrEqual(lower)
    expect(actual).toBeLessThanOrEqual(upper)
    expect(Math.floor(actual)).toEqual(actual)
  })

  it('should return a random float if isFloat is true', () => {
    const lower = 0
    const upper = 10
    const actual = random(lower, upper, true)
    expect(actual).toBeGreaterThanOrEqual(lower)
    expect(actual).toBeLessThanOrEqual(upper)
    expect(actual.toString(10).indexOf('.') >= 1).toBe(true)
  })

  it('must be higher or equal to lower and greater than equal to upper', () => {
    for ( let i = 0; i < 100; i++ ) {
      const randomNumber = random(5, 10, true)
      expect(randomNumber).toBeGreaterThanOrEqual(5)
      expect(randomNumber).toBeLessThanOrEqual(10)
    }
    
  })

  it('should return an integer if it gets two integer params', () => {
    for ( let i = 0; i < 100; i++ ) {
      const randomNumber = random(5, 19)
      expect(randomNumber).toBeGreaterThanOrEqual(5)
      expect(randomNumber).toBeLessThanOrEqual(19)
      expect(Math.floor(randomNumber)).toEqual(randomNumber)
    }
  })

  it('should return a float if lower is float', () => {
    for ( let i = 0; i < 100; i++ ) {
      const randomNumber = random(1.5, 10)
      expect(randomNumber).toBeGreaterThanOrEqual(1.5)
      expect(randomNumber.toString(10).indexOf('.')).toBeGreaterThanOrEqual(0)
    }
  })

  it('should should accept accept just an upper and isFloat params', () => {
    for ( let i = 0; i < 50; i++ ) {
      const r = random(10, true)
      expect(r).toBeLessThanOrEqual(10)
      expect(r.toString(10).indexOf('.')).toBeGreaterThanOrEqual(0)
    }
  })

  it('should accept just an upper param and return an integer', () => {
    for ( let i = 0; i < 50; i++ ) {
      const r = random(100)
      expect(r).toBeGreaterThanOrEqual(0)
      expect(Math.floor(r)).toEqual(r)
    }
  })
})