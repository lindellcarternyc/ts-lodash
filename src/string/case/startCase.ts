import caseString from './case'

const startCase = (str: string): string => caseString(s => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}, ' ')(str)

export default startCase