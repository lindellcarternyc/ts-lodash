type EscapedCharacter = '&amp;' | '&lt;' | '&gt;' | '&quot;' | '&#39;'

const EscapedCharMap: { [K in EscapedCharacter]: string } = {
  '&#39;': "'",
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&quot;': '"',
}

export const isEscapedCharacter = (str: string): str is EscapedCharacter => {
  return Object.keys(EscapedCharMap).indexOf(str) >= 0
}

const handleUnescape = (char: EscapedCharacter): string => {
  return EscapedCharMap[char]
}

const unescape = (str: string): string => {
  const re = /&(amp|lt|gt|quot|#39);/g
  return str.replace(re, s => {
    return isEscapedCharacter(s) ? handleUnescape(s) : s
  })
}

export default unescape
