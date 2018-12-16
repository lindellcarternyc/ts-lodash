import words from '../words'

const snakeCase = (str: string) => {
  return words(str, /([a-z]+|([A-Z]\w+)+)/g)
    .map(word => word.toLowerCase())
    .join('_')
}

export default snakeCase