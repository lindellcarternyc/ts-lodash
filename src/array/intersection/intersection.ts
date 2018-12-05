const intersection = <T>(...arrays: T[][]): T[] => {
  const includedItems: T[] = []
  const [first, ...rest] = arrays

  return first.reduce<T[]>((result, item) => {
    for (const arr of rest) {
      if (arr.indexOf(item) >= 0 && includedItems.indexOf(item) === -1) {
        includedItems.push(item)
        return result.concat(item)
      }
    }
    return result
  }, [])
}

export default intersection
