import caseString from './case'

const lowerCase = (str: string): string => {
  return caseString(s => s.toLowerCase(), ' ')(str)
}

export default lowerCase
