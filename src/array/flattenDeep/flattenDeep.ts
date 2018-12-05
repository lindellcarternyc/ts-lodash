const flattenDeep = <T>(array: T[]): T[] => {
  return array.reduce<T[]>((flatArray, item) => {
    if (Array.isArray(item)) {
      return flatArray.concat(flattenDeep(item))
    }
    return flatArray.concat(item)
  }, [])
}

export default flattenDeep
