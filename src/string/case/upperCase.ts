import caseString from './case'

const upperCase = (str: string): string => caseString(s => s.toUpperCase(), ' ')(str)

export default upperCase