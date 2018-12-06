const defaultTo = <T, U>(value: null | undefined | T, defaultValue: U): T | U => {
  if ( value === null || value === undefined ) {
    return defaultValue
  } else if ( typeof value === 'number' ) {
    if ( isNaN(value) ) {
      return defaultValue
    }
  }
  
  return value
}

export default defaultTo