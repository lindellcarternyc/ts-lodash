type TransformFunc<T, U> = (value: T) => U

const handleTransformIntersection = <T, U>(firstArray: T[], rest: T[][], transformFunc: TransformFunc<T, U>): T[] => {
  const includedTransformedItems: U[] = []
  return firstArray.reduce<T[]>((result, item) => {
    for ( const arr of rest ) {
      const transformed = transformFunc(item)
      if ( includedTransformedItems.indexOf(transformed) === -1 ) {
        if ( arr.map(transformFunc).indexOf(transformed) >= 0 ) {
          includedTransformedItems.push(transformed)
          return result.concat(item)
        }
      }  
    }
    return result
  }, [])
}

const intersectionBy = <T, U, K extends keyof T>(...params: [T[][], TransformFunc<T, U> | K]): T[] => {
  const [arrays, transform] = params
  const [first, ...rest] = arrays

  if ( typeof transform === 'function' ) {
    return handleTransformIntersection(first, rest, transform)
  }
  
  return handleTransformIntersection(first, rest, (item) => {
    return item[transform]
  })
  
}

export default intersectionBy