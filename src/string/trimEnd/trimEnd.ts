const trimEnd = (str: string, chars: string = ' '): string => {
  const searchChars = chars.split('')
  let idx = str.length - 1
  while (idx >= 0) {
    if (searchChars.indexOf(str.charAt(idx)) >= 0) {
      idx--
    } else {
      break
    }
  }

  return str.slice(0, idx + 1)
}

export default trimEnd
