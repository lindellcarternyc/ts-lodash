import { IUniqMap } from './uniq.types'

const handleUniq = <T>(array: T[], index: number = 0, result: T[] = [], uniqMap: IUniqMap = {}): [T[], IUniqMap] => {
  if (index >= array.length) {
    return [result, uniqMap]
  }

  const item = array[index]
  const key = JSON.stringify(item)
  if (uniqMap[key] !== true) {
    return handleUniq(array, index + 1, result.concat(item), { ...uniqMap, [key]: true })
  }

  return handleUniq(array, index + 1, result, uniqMap)
}

const uniq = <T>(array: T[]): T[] => handleUniq(array)[0]

export { uniq, handleUniq }
