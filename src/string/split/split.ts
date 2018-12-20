const split = (str: string, separator: string, limit?: number): string[] => {
  return str.split(separator, limit)
}

export default split
