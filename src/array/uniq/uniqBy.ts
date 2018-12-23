import { IUniqMap } from './uniq.types'
type UniqByFunc<T> = (item: T, index: number, array: T[]) => any

const handleUniqBy = <T, K extends keyof T>(
  array: T[],
  func: UniqByFunc<T> | K,
  index: number = 0,
  result: T[] = [],
  uniqMap: IUniqMap = {}
): [T[], IUniqMap] => {
  if (index >= array.length) {
    return [result, uniqMap]
  }

  const item = array[index]
  const transformedItem = typeof func === 'function' ? func(item, index, array) : item[func]

  const key = JSON.stringify(transformedItem)
  if (uniqMap[key] !== true) {
    return handleUniqBy(array, func, index + 1, result.concat(item), { ...uniqMap, [key]: true })
  }

  return handleUniqBy(array, func, index + 1, result, uniqMap)
}

const uniqBy = <T, K extends keyof T>(array: T[], uniqFunc: UniqByFunc<T> | K): T[] => {
  const [result, _] = handleUniqBy(array, uniqFunc)
  return result
}

export { uniqBy, handleUniqBy }
