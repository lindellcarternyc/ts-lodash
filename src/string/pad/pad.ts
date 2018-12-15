const combineLengths = (str: string, starChars: string, endChars: string): number => {
  return str.length + starChars.length + endChars.length
}

const pad = (str: string, length: number, chars: string = ' '): string => {
  let start = ''
  let end = ''
  let charIdx = 0

  while ( combineLengths(str, start, end) < length ) {
    if ( combineLengths(str, start, end) < length - 2 ) {
      start += chars[charIdx]
      end += chars[charIdx]

      charIdx++
      if ( charIdx >= chars.length ) {
        charIdx = 0
      }
    } else {
      break
    }
  }
  
  while ( combineLengths(str, start, end) < length ) {
    end += chars[charIdx]
    charIdx++
    if ( charIdx >= chars.length ) {
      charIdx = 0
    }
  }

  return start + str + end
}

export default pad