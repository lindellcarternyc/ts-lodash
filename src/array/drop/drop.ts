const drop = <T>(array: T[], n: number = 1): T[] => {
  const sliceIdx = n >= 1 ? n : 0
  return array.slice(sliceIdx)
}

export default drop