import words from '../words'
import { CASE_WORD_REG_EXP } from './constants'

type MapFunc = (str: string, idx: number) => string

const caseString = (transform: MapFunc, separator: string): (str: string) => string => {
  return str => {
    const wordsArray = words(str, CASE_WORD_REG_EXP)
    return wordsArray.map(transform).join(separator)
  }
}

export default caseString