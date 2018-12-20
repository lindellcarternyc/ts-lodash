const padEnd = (str: string, length: number, chars: string = ' '): string => {
  if (str.length >= length) {
    return str
  }

  let result = str
  let charIdx = 0
  while (result.length < length) {
    result += chars.charAt(charIdx)
    charIdx++
    if (charIdx >= chars.length) {
      charIdx = 0
    }
  }
  return result
}

export default padEnd
