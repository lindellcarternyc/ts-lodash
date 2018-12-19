import caseString from './case'

describe('#caseString', () => {
  it('should return a function that accepts a string', () => {
    const func = caseString(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(), '-')
    expect(typeof func).toBe('function')
    const funcInput = 'fooBar'
    const expectedOutput = 'Foo-Bar'
    const actualOutput = func(funcInput)
    expect(actualOutput).toBe(expectedOutput)
  })
})

// describe('#caseString', () => {
//   /**
//    * Start Case
//    */
//   it('should start case a string', () => {
//     expect(caseString('fooBar', 'start')).toBe('Foo Bar')
//   })

//   /**
//    * Snake case
//    */
//   it('should snake case a string', () => {
//     const inputs = [
//       'Foo Bar', 'fooBar', '--FOO-BAR--'
//     ]
//     inputs.forEach(input => () => {
//       expect(caseString(input, 'snake')).toBe('foo_bar')
//     })
//   })

//   /**
//    * camel case
//    */
//   it('should return a string in camel case', () => {
//     const a = caseString('camelCase', 'camel')
//     expect(a).toBe('camelCase')
//   })

//   it('should camel case a single string', () => {
//     const a1 = caseString('Foo', 'camel')
//     expect(a1).toBe('foo')
//   })

//   it('should camel case a space separated string', () => {
//     const inputs = ['foo bar', 'Foo Bar', 'Foo bar', 'FOO BAR']

//     inputs.forEach(input => {
//       expect(caseString(input, 'camel')).toBe('fooBar')
//     })
//   })

//   it('should ignore non letters', () => {
//     const inputs = ['-foo-bar*', '__FOO_BAR__']

//     inputs.forEach(input => {
//       expect(caseString(input, 'camel')).toBe('fooBar')
//     })
//   })

//   /**
//    * Lower case
//    */
//   const lowerCaseInputs = ['--Foo-bar', 'fooBar', '__FOO_BAR__']
//   lowerCaseInputs.forEach(input => {
//     it(`should lowercase ${input}`, () => {
//       const actual = caseString(input, 'lower')
//       expect(actual).toBe('foo bar')
//     })
//   })

//   const kebabInputs = ['foo bar', 'Foo Bar', '*foo__bar']

//   const expected = 'foo-bar'

//   kebabInputs.forEach(input => {
//     it(`should return ${input} in kebab case`, () => {
//       const actual = caseString(input, 'kebab')
//       expect(actual).toBe(expected)
//     })
//   })
// })