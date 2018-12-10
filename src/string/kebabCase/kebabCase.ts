const kebabCase = (str: string): string => {
  return str.replace(/[^a-z]/ig, _ => ' ')
    .split(' ')
    .filter(char => char.length > 0 && char !== ' ')
    .map(char => char.toLowerCase())
    .join('-')
}

export default kebabCase
