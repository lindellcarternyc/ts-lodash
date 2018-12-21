interface IBooleanMap {[key: string]: boolean}

const unique = <T>(array: T[], result: T[] = [], index: number = 0, boolMap: IBooleanMap = { }): { result: T[], boolMap: IBooleanMap }  => {
  if ( index >= array.length ) {
    return { result, boolMap }
  }
  
  const item = array[index]
  const key = JSON.stringify(item)

  if ( boolMap[key] !== true ) {
    return unique(array, result.concat(item), index + 1, { ...boolMap, [key]: true })
  }

  return unique(array, result, index + 1, boolMap)
}

const union = <T>(array: T[], ...otherArrays: T[][]): T[] => {
  const { 
    result,
    boolMap
  } = unique(array)
  
  let updatedResult = [...result]
  let updatedBoolMap = { ...boolMap }
  for ( const otherArray of otherArrays ) {
    const updatedUnique = unique(otherArray, [], 0, updatedBoolMap)
    updatedResult = updatedResult.concat(updatedUnique.result)
    updatedBoolMap = updatedUnique.boolMap
  }

  return updatedResult
}

export default union