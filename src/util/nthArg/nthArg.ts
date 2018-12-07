type Indices<T extends any[]> = Exclude<keyof T, keyof any[]>

const nthArg = (n: number = 0) => {
  return <T extends any[], K extends keyof T = Indices<T>>(...args: T): T[K] => {
    const index = n >= 0 ? n : args.length + n
    return args[index] as T[K]
  }
}

export default nthArg
