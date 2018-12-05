type Comparator<T> = (val1: T, val2: T) => boolean

const intersectionWith = <T>(...params: [T[][], Comparator<T>]): T[] => {
  const [[first, ...rest], comparator] = params
  const includedValues: T[] = []
  return first.reduce<T[]>((result, item) => {
    if ( includedValues.indexOf(item) === -1 ) {
      for ( const arr of rest ) {
        for ( const arrItem of arr ) {
          if ( comparator(item, arrItem) ) {
            includedValues.push(item)
            return result.concat(item)
          }
        }
      }
    }
    return result
  }, [])
}

export default intersectionWith