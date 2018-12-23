type ArrayTypes<T> = T extends Array<Array<infer U>> ? U : never
type ResultArray<T> = Array<Array<ArrayTypes<T>>>

const shortestArrayLength = (arrays: any[][]): number => {
  return arrays.reduce<number>((length, array) => {
    if (length === 0) {
      return array.length
    }
    return Math.min(length, array.length)
  }, 0)
}

const zip = <T extends any[][]>(...arrays: T): ResultArray<T> => {
  const shortestLength = shortestArrayLength(arrays)
  return arrays.reduce<ResultArray<T>>((result, currentArray, currentIndex) => {
    if (currentIndex === 0) {
      return currentArray.slice(0, shortestLength).map(item => [item])
    }

    return result.map((res, idx) => {
      return [...res, currentArray[idx]]
    })
  }, [])
}

export default zip
