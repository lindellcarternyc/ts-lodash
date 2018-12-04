const dropRight = <T>(array: T[], n: number = 1): T[] => {
  const sliceEnd = array.length - n >= 0 
    ? array.length - n : 0
  return array.slice(0, sliceEnd)
}

export default dropRight