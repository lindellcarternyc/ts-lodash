const nth = <T>(array: T[], n: number = 0): T | undefined => {
  const index = n >= 0 ? n : array.length + n
  return array[index]
}

export default nth