import dropRight from '../dropRight'

const handlePredicateFunc = <T>(array: T[], predFunc: PredicateFunction<T>): T[] => {
  let result = [...array]
  for (let idx = array.length - 1; idx >= 0; idx--) {
    if (predFunc(array[idx])) {
      result = dropRight(result)
    } else {
      break
    }
  }

  return result
}

const dropRightWhile = <T, K extends keyof T>(array: T[], predicate: Predicate<T, K>): T[] => {
  if (typeof predicate === 'function') {
    const predicateFunction = predicate as PredicateFunction<T>
    return handlePredicateFunc(array, predicateFunction)
  } else if (predicate instanceof Array) {
    const [prop, value] = predicate as PredicatePropertyMatch<T, K>
    return handlePredicateFunc(array, item => {
      return item[prop] === value
    })
  } else {
    const matches = predicate as PredicateMatchObject<T>
    return handlePredicateFunc(array, item => {
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

export default dropRightWhile
