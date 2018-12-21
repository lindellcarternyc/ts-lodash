import { handleUniqBy } from '../uniq'

type UnionByFunc<T> = (item: T, index: number, array: T[]) => any

const unionBy = <T, K extends keyof T>(array1: T[], otherArrays: T[][], func: K | UnionByFunc<T>): T[] => {
  let  [ result, map ] = handleUniqBy(array1, func)

  for ( const otherArray of otherArrays ) {
    [ result, map ] = handleUniqBy(otherArray, func, 0, result, map)
  }
  return result
}

export default unionBy