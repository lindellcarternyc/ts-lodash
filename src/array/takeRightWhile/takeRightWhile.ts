import { handleMatch, MatchType } from '../../interfaces/MatchObjects'

const handleTake = <T extends { [key: string]: any}>(arr: T[], func: MatchType<T>, result: T[] = [], offset: number = 1): T[] => {
  if ( offset > arr.length ) {
    return result
  } else {
    const item = arr[arr.length - offset]
    if ( handleMatch(item, func, arr.length - offset, arr) === true ) {
      return handleTake(arr, func, [item, ...result], offset + 1)
    } 
    return result
  }
}

const takeRightWhile = <T extends { [key: string]: any}>(arr: T[], func: MatchType<T>): T[] => {
  return handleTake(arr, func)
}

export default takeRightWhile