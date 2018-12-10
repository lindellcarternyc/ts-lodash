import capitalize from '../capitalize'

const camelCase = (str: string) => {
  return str
    .replace(/[^a-zA-Z]+/gi, _ => ' ')
    .split(' ')
    .filter(x => x.length > 0 && x !== ' ')
    .reduce<string>((res, s) => {
      if (res.length === 0) {
        return s.toLowerCase()
      }
      return res + capitalize(s)
    }, '')
}

export default camelCase
