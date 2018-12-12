import trimEnd from '../trimEnd'
import trimStart from '../trimStart'

const trim = (str: string, chars: string = ' '): string => {
  return trimStart(trimEnd(str, chars), chars)
}

export default trim
