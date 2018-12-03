type ArrayElement<T extends any> = T | '' | 0 | false | null | undefined

const compact = <T extends any>(array: Array<ArrayElement<T & any>>): T[] => {
  const result = array.filter(item => !!item)
  return result as T[]
}

export default compact
