type Comparator<T> = (val1: T, val2: T) => boolean

const pullAllWith = <T>(array: T[], values: T[], compFunc: Comparator<T>): T[] => {
  return array.reduce<T[]>((res, item) => {
    for (const value of values) {
      if (compFunc(item, value)) {
        return res
      }
    }
    return res.concat(item)
  }, [])
}

export default pullAllWith
