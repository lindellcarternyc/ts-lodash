const lowercase = (str: string): string => {
  return str
    .replace(/[^a-z]/gi, _ => ' ')
    .split(' ')
    .filter(word => word.length > 0 && word !== ' ')
    .map(word => {
      return word
        .replace(/[a-z][A-Z]/g, match => {
          return match.slice(0, 1) + ' ' + match.slice(1)
        })
        .toLowerCase()
    })
    .join(' ')
}

export default lowercase
