type ArrayElement<T> 
= T
| ''
| 0
| false
| null 
| undefined
| any

const compact = <T>(array: Array<ArrayElement<T | any>>): T[] => {
  const result = array.filter(item => !!item)
  // type resType = infer result
  return result as T[]
}

export default compact