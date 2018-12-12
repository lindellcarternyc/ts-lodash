const startsWith = (str: string, pattern: string | RegExp, position?: number): boolean => {
  let searchString: string

  if (position === undefined || position === 0) {
    searchString = str.slice(0)
  } else {
    searchString = str.slice(position)
  }

  if (typeof pattern === 'string') {
    return searchString.slice(0, pattern.length) === pattern
  } else {
    const matchObj = searchString.match(new RegExp('^' + pattern.source))
    return matchObj === null ? false : true
  }
}

export default startsWith
