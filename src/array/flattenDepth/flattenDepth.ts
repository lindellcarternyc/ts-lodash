import flatten from '../flatten'

const flattenDepth = <T>(array: T[], depth: number = 1): T[] => {
  let result: Array<T | T[]> = [...array]

  let flatDepth = depth <= 0 ? 1 : depth
  while (flatDepth >= 1) {
    result = flatten(result)
    flatDepth--
  }

  return result as T[]
}

export default flattenDepth
