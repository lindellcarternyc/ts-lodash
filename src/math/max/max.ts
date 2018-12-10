const max = (array: number[]): number | undefined => {
  return array.length > 0 ? Math.max(...array) : undefined
}

export default max
