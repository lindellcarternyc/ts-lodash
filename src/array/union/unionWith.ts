import { Comparator } from '../../generics'

import { handleUniqWith, uniqWith } from '../uniq'

const unionWith = <T>(array1: T[], otherArrays: T[][], comparator: Comparator<T>) => {
  let [result, map] = handleUniqWith(array1, comparator)

  for (const otherArray of otherArrays) {
    ;[result, map] = handleUniqWith(otherArray, comparator, 0, result, map)
  }

  return result
}

export default unionWith
