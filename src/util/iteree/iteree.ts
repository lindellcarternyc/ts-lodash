import identity from '../identity'
import matches from '../matches'

type Identity<T> = (value: T) => T
type Transform<T, U> = (value: T) => U
type TransformBool<T> = (value: T) => boolean

function iteree<T>(): <U extends T>(value: U) => U
function iteree<T, U>(func: Transform<T, U>): Transform<T, U>
function iteree<T>(func: string): <K extends keyof T>(value: T) => T[K]
function iteree<T>(func: T): <U extends T>(value: U) => boolean
function iteree<T, K extends keyof T = keyof T>(func: [K, T[K]]): (value: Partial<T>) => boolean
function iteree<T, V extends T = any, K extends keyof T = keyof T, U = any>(
  func?: Transform<T, U> | T | K | [K, T[K]] | string
): Identity<T> | Transform<T, U> | TransformBool<V> | Transform<T, T[K]> {
  if (func) {
    if (typeof func === 'function') {
      return (value: T) => (func as Transform<T, U>)(value)
    } else if (typeof func === 'string') {
      return (value: T): T[K] => {
        return value[func as K]
      }
    } else if (func instanceof Array) {
      const [prop, val] = func
      return (value: T): boolean => {
        return value[prop] === val
      }
    } else {
      return (value: V) => matches<T>(func as T)(value)
    }
  }
  return (value: T) => identity<T>(value)
}

export default iteree
