type EscapeChar = '^' | '$' | '.' | '*' | '+' | '?' | '(' | ')' | '{' | '}' | '[' | ']' | '|'

const EscapeMap: { [key in EscapeChar]: EscapeChar } = {
  '^': '^',
  $: '$',
  '.': '.',
  '*': '*',
  '+': '+',
  '?': '?',
  '(': '(',
  ')': ')',
  '{': '{',
  '}': '}',
  '[': '[',
  ']': ']',
  '|': '|',
}

const isEscapeChar = (char: string): char is EscapeChar => {
  return Object.keys(EscapeMap).indexOf(char) >= 0
}

const handleEscape = (char: EscapeChar): string => {
  return `\\${char}`
}

const escapeRegExp = (str: string): string => {
  return str
    .split('')
    .map(char => (isEscapeChar(char) ? handleEscape(char) : char))
    .join('')
}

export default escapeRegExp
