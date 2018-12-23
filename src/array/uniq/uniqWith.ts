import { Comparator } from '../../generics'

interface IUniqValue<T> {
  value: T
}

interface IUniqValueMap<T> {
  [key: string]: IUniqValue<T>
}

const handleUniqWith = <T>(
  array: T[],
  comparator: Comparator<T>,
  index: number = 0,
  result: T[] = [],
  uniqValueMap: IUniqValueMap<T> = {}
): [T[], IUniqValueMap<T>] => {
  if (index >= array.length) {
    return [result, uniqValueMap]
  } else {
    const item = array[index]
    const key = JSON.stringify(item)

    let doesMatch: boolean = false
    for (const uniqKey in uniqValueMap) {
      if (comparator(uniqValueMap[uniqKey].value, item)) {
        doesMatch = true
        break
      }
    }
    if (doesMatch) {
      return handleUniqWith(array, comparator, index + 1, result, uniqValueMap)
    }

    return handleUniqWith(array, comparator, index + 1, result.concat(item), {
      ...uniqValueMap,
      [key]: { value: item },
    })
  }
}

const uniqWith = <T>(array: T[], comparator: Comparator<T>): T[] => {
  const [result] = handleUniqWith(array, comparator)
  return result
}

export { uniqWith, handleUniqWith }
