const handleFind = <T>(array: T[], fromIndex: number) => (func: PredicateFunction<T>): number => {
  let index = fromIndex < 0
    ? 0
    : fromIndex > array.length
      ? array.length 
      : fromIndex
  for ( index; index < array.length; index++ ) {
    if ( func(array[index]) ) {
      return index
    }
  }
  return -1
}

const findIndex = <T, K extends keyof T, Pred extends Predicate<T, K>>(array: T[], predicate: Pred, fromIndex: number = 0): number => {
  const handler = handleFind(array, fromIndex)
  if ( typeof predicate === 'function' ) {
    return handler(predicate as PredicateFunction<T>)
  } else if ( predicate instanceof Array ) {
    const [prop, value] = predicate as PredicatePropertyMatch<T, K>
    return handler(item => item[prop] === value)
  } else if ( typeof predicate === 'string' ) {
    return handler(item => {
      return !!item[predicate as keyof T]
    })
  } else {
    const properties = predicate as PredicateMatchObject<T>
    return handler(item => {
      for ( const prop in properties ) {
        if ( item[prop] !== properties[prop] ) {
          return false
        }
      }
      return true
    })
  }
}

export default findIndex