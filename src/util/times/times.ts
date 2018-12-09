import identity from '../identity'
import range from '../range'

function times(n: number): number[]

function times<TResult>(n: number, func: (n?: number) => TResult): TResult[]

function times<TResult>(n: number, func?: (n?: number) => TResult): number[] | TResult[] {
  const r = range(n)

  if (func) {
    return r.map(func)
  }
  return r.map(_ => identity(n))
}

export default times
