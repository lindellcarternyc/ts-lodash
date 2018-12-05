const initial = <T>(array: T[]): T[] => {
  return array.slice(0, array.length - 1)
}

export default initial
