type EscapeChar = '&' | '<' | '>' | "'" | '"'

const isEscapChar = (char: string): char is EscapeChar => {
  return Object.keys(EscapeMap).indexOf(char) >= 0
}

const EscapeMap: { [key in EscapeChar]: string } = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  "'": '#39',
  '"': 'quot',
}

const handleEscape = (char: EscapeChar): string => {
  return `&${EscapeMap[char]};`
}

const escape = (str: string): string => {
  return str
    .split('')
    .map(s => (isEscapChar(s) ? handleEscape(s) : s))
    .join('')
}

export default escape
