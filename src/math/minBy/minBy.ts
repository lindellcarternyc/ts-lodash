import min from '../min'

function minBy<T>(objects: T[], func: (obj: T) => number): T | undefined
function minBy<T, K extends keyof T>(objects: T[], property: K): T | undefined
function minBy<T, K extends keyof T>(objects: T[], iteree: ((obj: T) => number) | K): T | undefined {
  let numbers: number[]

  if (typeof iteree === 'function') {
    numbers = objects.map(iteree)
  } else {
    if (typeof objects[0][iteree] === 'number') {
      numbers = objects.reduce<number[]>((res, obj) => {
        return res.concat(obj[iteree] as any)
      }, [])
    } else {
      return
    }
  }

  const minNumber = min(numbers)
  const minIdx = minNumber === undefined ? -1 : numbers.indexOf(minNumber)
  return objects[minIdx]
}

export default minBy
