import caseString from './case'

const kebabCase = (str: string): string => {
  return caseString(s => s.toLowerCase(), '-')(str)
}

export default kebabCase
