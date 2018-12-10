type EscapeCharType = '&' | '<' | '>' | "'" | '"'

const isEscapChar = (char: string) => {
  return Object.keys(EscapeMap).indexOf(char) >= 0
}

const EscapeMap: {[key in EscapeCharType]: string} = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  "'": '#39',
  '"': 'quot'
}

const handleEscape = (char: EscapeCharType): string => {
  return `&${EscapeMap[char]};`
}

const escape = (str: string): string => {
  return str
    .split('')
    .map(s => isEscapChar(s) ? handleEscape(s as EscapeCharType) : s)
    .join('')
}

export default escape
