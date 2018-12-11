const handleRepeat = (str: string, n: number, result: string = ''): string => {
  if ( n <= 0 ) {
    return result
  }
  return handleRepeat(str, n - 1, result + str)
}

const repeat = (str: string, n: number = 1): string => {
  return handleRepeat(str, n, '')
}

export default repeat
