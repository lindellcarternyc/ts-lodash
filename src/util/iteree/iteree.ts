import identity from '../identity'

type IdentityFunc<T> = (value: T) => T
type TransformFunc<T, U> = (value: T) => U
type MatchesObject<T> = Partial<T>
type PropertyMatch<T, K extends keyof T> = [K, T[K]]

function iteree<T, K extends keyof T>(): IdentityFunc<T>
function iteree<T, K extends keyof T>(func: MatchesObject<T> | PropertyMatch<T, K>): TransformFunc<T, boolean>
// function iteree<T, K extends keyof T>(func: ): TransformFunc<T, boolean>
function iteree<T, K extends keyof T>(func: K): TransformFunc<T, T[K]>
function iteree<T, K extends keyof T, U>(func: TransformFunc<T, U>): (value: T) => U
function iteree<T, K extends keyof T, U>(func?: TransformFunc<T, U> | MatchesObject<T> | PropertyMatch<T, K> | K): IdentityFunc<T> | TransformFunc<T, U> | TransformFunc<T, boolean> | TransformFunc<T, T[K]> {
  if ( func ) {
    if ( typeof func === 'function' ) {
      return (value: T) => func(value)
    } else if ( func instanceof Array ) { 
      return (value: T): boolean => {
        const [prop, val] = func
        return value[prop] === val
      }
    } else if ( typeof func === 'string' ) {
      return (value: T): T[K] => {
        const key = func as K
        return value[key]
      }
    } else {
      const matches = func as MatchesObject<T>
      return (value: T): boolean => {
        for ( const prop in matches ) {
          if ( value[prop] !== matches[prop] ) {
            return false
          }
        }
        return true
      }
    }
  }
  return (value: T) => identity(value)
}

export default iteree