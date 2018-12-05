const lastIndexOf = <T>(array: T[], value: T, fromIndex: number | undefined = undefined): number => {
  const searchIdx = fromIndex === undefined ? array.length - 1 : fromIndex
  return array.lastIndexOf(value, searchIdx)
}

export default lastIndexOf