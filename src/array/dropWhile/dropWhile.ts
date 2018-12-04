import drop from '../drop'

const handleDrop = <T>(array: T[], predFunc: PredicateFunction<T>): T[] => {
  let result = [...array]
  for (const item of array) {
    if (predFunc(item)) {
      result = drop(result)
    } else {
      break
    }
  }
  return result
}

const dropWhile = <T, K extends keyof T>(array: T[], predicate: Predicate<T, K>): T[] => {
  if (typeof predicate === 'function') {
    return handleDrop(array, predicate)
  } else if (predicate instanceof Array) {
    const [prop, value] = predicate
    return handleDrop(array, item => item[prop] === value)
  } else {
    const matches = predicate as PredicateMatchObject<T>
    return handleDrop(array, item => {
      let doesMatch = true
      for (const prop in matches) {
        if (item[prop] !== matches[prop]) {
          doesMatch = false
          break
        }
      }
      return doesMatch
    })
  }
}

export default dropWhile
