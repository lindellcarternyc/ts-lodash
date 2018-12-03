const difference = <T>(array: T[], values: T[]): T[] => {
  return array.reduce<T[]>((result, item) => {
    if (values.indexOf(item) === -1) {
      return [...result, item]
    }
    return result
  }, [])
}

export default difference
