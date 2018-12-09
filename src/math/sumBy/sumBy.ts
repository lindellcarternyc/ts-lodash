import sum from '../sum'

type ToNumber<T> = (o: T) => number

function sumBy<T>(objects: T[], func: ToNumber<T>): number | undefined
function sumBy<T, K extends keyof T>(objects: T[], prop: K): number | undefined
function sumBy<T, K extends keyof T>(objects: T[], iteree: ToNumber<T> | K ): number | undefined {
  if ( objects.length < 1 ) { return }

  let numbers: number[]
  if ( typeof iteree === 'function' ) {
    numbers = objects.map(iteree)
  } else if ( typeof objects[0][iteree] === 'number' ) {
    numbers = objects.map<any>(obj => obj[iteree])
  } else { 
    return
  }

  return sum(numbers)
}

export default sumBy
