const padNumberRight = (str: string, length: number): string => {
  return str.length >= length 
    ? str : padNumberRight(str + '0', length)
}

export default padNumberRight
