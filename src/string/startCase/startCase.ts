import words from '../words'

const startCase = (str: string): string => {
  return words(str, /([A-Z][a-zA-Z]+)|([a-z]+)/g)
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ')
}

export default startCase