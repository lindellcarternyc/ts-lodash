import capitalize from '../capitalize'
import caseString from './case'

const handleCamelCase = caseString((s, idx) => {
  if ( idx === 0 ) {
    return s.toLowerCase()
  }
  return capitalize(s)
}, '')

const camelCase = (str: string): string => {
  return handleCamelCase(str)
}

export default camelCase
