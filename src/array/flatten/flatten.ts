const flatten = <T>(array: T[]): T[] => {
  return array.reduce<T[]>((arr, item) => {
    if (item instanceof Array) {
      return [...arr, ...item]
    }
    return [...arr, item]
  }, [])
}

export default flatten
