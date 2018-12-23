import { Comparator } from '../../generics'

import { handleUniqWith } from '../uniq'

const unionWith = <T>(array1: T[], otherArrays: T[][], comparator: Comparator<T>) => {
  let [result, map] = handleUniqWith(array1, comparator)

  for (const otherArray of otherArrays) {
    const [newResult, newMap] = handleUniqWith(otherArray, comparator, 0, result, map)
    result = newResult
    map = newMap
  }

  return result
}

export default unionWith
