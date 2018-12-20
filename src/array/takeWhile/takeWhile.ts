import { handleMatch, MatchType } from '../../interfaces/MatchObjects'

const handleTake = <T>(array: T[], match: MatchType<T>, result: T[] = [], offset: number = 0): T[] => {
  if ( offset >= array.length ) {
    return result
  }

  const item = array[offset]
  if ( handleMatch(item, match, offset, array) ) {
    return handleTake(array, match, result.concat(item), offset + 1)
  }
  return result
}

const takeWhile = <T>(array: T[], match: MatchType<T>): T[] => {
  return handleTake(array, match)
}

export default takeWhile