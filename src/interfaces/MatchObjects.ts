type MatchFunc<T> = (item: T, index: number, array: T[]) => boolean
type Match<T> = T
type MatchKey<T> = keyof T
type MatchValue<T, K extends MatchKey<T>> = [K, T[K]]

export type MatchType<T extends {[key: string]: any}>
  = Match<T>
  | MatchFunc<T>
  | MatchKey<T>
  | MatchValue<T, MatchKey<T>>

export const handleMatch = <T extends {[key: string]: any}>(item: T, match: MatchType<T>): boolean => {
  if ( typeof match === 'function' ) {
    return (match as (item: T) => boolean)(item)
  } else if ( match instanceof Array ) {
    const [prop, value] = match
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