const words = (str: string, pattern?: string | RegExp ): string[] => {
  if ( pattern === undefined ) {
    return str.replace(/[^a-z]/ig, _ => ' ')
      .split(' ')
      .filter(word => word !== ' ' &&  word.length > 0)
  }

  const matches = str.match(pattern)
  if ( matches === null ) {
    return []
  }

  return matches
}

export default words