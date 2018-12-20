type MatchType<T extends {[key: string]: any}, K extends keyof T> 
= T
| ((item: T, index: number, array: T[]) => boolean)
| [K, T[K]]
| K

const handleMatch = <T extends {[key: string]: any}, K extends keyof T>(item: T, match: MatchType<T, K>): boolean => {
  if ( typeof match === 'function' ) {
    return (match as (item: T) => boolean)(item)
  } else if ( match instanceof Array ) {
    const [prop, value] = match as [K, T[K]]
    return item[prop] === value
  } else if ( typeof match === 'string' ) {
    return !!item[match]
  }

  let doesMatch: boolean = true
  for ( const prop in item ) {
    if ( item[prop] !== (match as T)[prop] ) {
      doesMatch = false
      break
    }
  }

  return doesMatch
}

const handleTake = <T extends { [key: string]: any}, K extends keyof T>(arr: T[], func: MatchType<T, K>, result: T[] = [], offset: number = 1): T[] => {
  if ( offset > arr.length ) {
    return result
  } else {
    const item = arr[arr.length - offset]
    if ( handleMatch(item, func) === true ) {
      return handleTake(arr, func, [item, ...result], offset + 1)
    } 
    return result
  }
}

const takeRightWhile = <T extends { [key: string]: any}, K extends keyof T>(arr: T[], func: MatchType<T, K>): T[] => {
  // let result: T[] = []
  // let offset = 1

  // while ( offset <= arr.length ) {
  //   const item = arr[arr.length - offset]
  //   if ( handleMatch(item, func) ) {
  //     result = [item, ...result]
  //     offset++
  //   } else {
  //     break
  //   }
  // }

  // return result
  return handleTake(arr, func)
}

export default takeRightWhile