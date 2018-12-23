import { handleUniq } from '../uniq'

const union = <T>(array: T[], ...otherArrays: T[][]): T[] => {
  let [result, map] = handleUniq(array)
  for (const otherArray of otherArrays) {
    const [newResult, newMap] = handleUniq(otherArray, 0, result, map)
    result = newResult
    map = newMap
  }
  return result
}

export default union
