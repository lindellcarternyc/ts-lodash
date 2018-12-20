import caseString from './case'

const snakeCase = (str: string): string => {
  return caseString(s => s.toLowerCase(), '_')(str)
}

export default snakeCase
