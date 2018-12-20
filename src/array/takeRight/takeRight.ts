const handleTake = <T>(arr: T[], n: number, result: T[] = [], offset: number = 1): T[] => {
  if ( result.length >= n || offset > arr.length ) {
    return result
  }

  const item = arr[arr.length - offset]
  return handleTake(arr, n, [item, ...result], offset + 1)
} 

const takeRight = <T>(arr: T[], n: number = 1): T[] => {
  const numItems: number = n === undefined
    ? 1 : n < 0
      ? 0 : n
  return handleTake(arr, numItems)
}

export default takeRight