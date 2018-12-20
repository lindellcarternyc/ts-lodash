const tail = <T>(arr: T[]): T[] => {
  const [ _, ...rest] = arr
  return rest
}

export default tail