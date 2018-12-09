import mean from '../mean'

function meanBy<T>(objects: T[], func: (obj: T) => number): number | undefined
function meanBy<T, K extends keyof T>(objects: T[], prop: K): number | undefined
function meanBy<T, K extends keyof T>(objects: T[], iteree: K | ((obj: T) => number)): number | undefined {
  if ( objects.length === 0 ) { return undefined }

  if ( typeof iteree === 'function' ) {
    return mean(objects.map(iteree))
  } else {
    if ( typeof objects[0][iteree] ==='number' ) {
      const numbers = objects.map(o => o[iteree] as any) as number[]
      return mean(numbers)
    } else {
      return undefined
    }
  }
}

export default meanBy
