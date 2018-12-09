import property from '../../util/property'

type Func<T> = (obj: T) => number
type Maybe<T> = T | undefined

function maxBy<T>(objects: T[], func: Func<T>): Maybe<T>
function maxBy<T, K extends keyof T>(objects: T[], prop: K): Maybe<T> 
function maxBy<T, K extends keyof T>(objects: T[], func: K| ((obj: T) => number)) {
  let mapped: number[]

  if ( objects.length < 1 ) { 
    return undefined 
  } else if ( (typeof func === 'string') && (typeof objects[0][func] === "number") ) {
    mapped = objects.map(property(func))
  } else {
    mapped = objects.map(func as Func<T>)
  }

  const maxIdx = mapped.indexOf(Math.max(...mapped))
  return objects[maxIdx]
}

export default maxBy
