const indexOf = <T>(array: T[], value: T, fromIndex: number = 0): number => {
  const startIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex
  return array.indexOf(value, startIndex)
}

export default indexOf
