const trimStart = (str: string, chars: string = ' '): string => {
  let idx = 0
  const searchChars = chars.split('')

  while (idx < str.length) {
    if (searchChars.indexOf(str.charAt(idx)) >= 0) {
      idx++
    } else {
      break
    }
  }
  return str.slice(idx)
}

export default trimStart
