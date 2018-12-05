const handleFind = <T extends any>(array: T[], fromIndex: number) => (func: PredicateFunction<T>): number => {
  let index = fromIndex <= 0 
    ? 0 
    : fromIndex > array.length - 1
      ? array.length - 1
      : fromIndex
      
  for ( index; index >= 0; index-- ) {
    if ( func(array[index]) ) {
      return index
    }
  }
  return -1
}

const findLastIndex = <T extends any, K extends keyof T, Pred extends Predicate<T, K>>(
  array: T[], 
  predicate: Pred,
  fromIndex: number | undefined = undefined
): number =>{
  const handler = handleFind(array, fromIndex || array.length - 1)
  if ( typeof predicate === 'function' ) {
    return handler(predicate as PredicateFunction<T>)
  } else if ( (predicate as object) instanceof Array) {
    const [prop, value] = predicate as PredicatePropertyMatch<T, K>
    return handler(item => item[prop] === value)
  } else if ( typeof predicate === 'string' ) {
    return handler(item => {
      const prop = predicate as keyof T
      return !!item[prop]
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

export default findLastIndex