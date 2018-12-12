function replace(str: string, pattern: RegExp | string, replacement: string): string
// tslint:disable-next-line:unified-signatures
function replace(str: string, pattern: RegExp | string, replacement: (s: string, ...args: []) => string): string

function replace(
  str: string,
  pattern: RegExp | string,
  replacement: string | ((s: string, ...args: []) => string)
): string {
  if (typeof replacement === 'string') {
    return str.replace(pattern, replacement)
  } else {
    return str.replace(pattern, replacement)
  }
}

export default replace
