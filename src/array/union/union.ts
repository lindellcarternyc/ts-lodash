import { handleUniq } from '../uniq'

const union = <T>(array: T[], ...otherArrays: T[][]): T[] => {
  let [ result, map ] = handleUniq(array)
  for ( const otherArray of otherArrays ) {
    [ result, map ] = handleUniq(otherArray, 0, result, map)
  }
  return result
}

export default union