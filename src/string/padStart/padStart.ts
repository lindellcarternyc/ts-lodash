const padStart = (str: string, length: number, chars: string = ' '): string => {
  if (str.length >= length) {
    return str
  }

  let result = str
  let charIdx = 0
  while (result.length < length) {
    result = chars.charAt(charIdx) + result
    charIdx++
    if (charIdx >= chars.length) {
      charIdx = 0
    }
  }

  return result
}

export default padStart
