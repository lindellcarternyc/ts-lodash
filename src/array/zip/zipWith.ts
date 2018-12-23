type ArrayTypes<T> = T extends Array<Array<infer U>> ? U : never

type Iteree<T, U> = (...params: Array<ArrayTypes<T>>) => U

const shortestArrayLength = (arrays: any[][]): number => {
  return arrays.reduce<number>((length, array) => { 
    if ( length === 0 ) {
      return array.length
    }
    return Math.min(length, array.length)
  }, 0)
}

const zipWith = <T extends any[][], U>(arrays: T, func: Iteree<T, U>): U[] => {
  const shortestLength = shortestArrayLength(arrays)
  const result: U[] = []

  for ( let i = 0; i < shortestLength; i++ ) {
    const params = arrays.reduce<any[]>((paramList, array) => { 
      return [ ...paramList, array[i] ]
    }, [])

    const fResult = func(...params)
    result.push(fResult)
  }

  return result
}

export default zipWith