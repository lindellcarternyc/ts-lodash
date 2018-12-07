const handleMatch = <T, U extends T>(match: T, value: U): boolean => {
  for ( const key in match ) {
    if ( value[key] !== match[key] ) {
      return false
    }
  }
  return true
}

const matches = <T>(params: T) => <U extends T>(value: U) => handleMatch<T, U>(params, value)

export default matches