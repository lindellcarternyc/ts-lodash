import identity from '../identity'

type Func = (arg: any) => any

const overEveryIdentity = (...args: any[]): boolean => {
  for (const arg of args) {
    if (!!identity(arg) === false) {
      return false
    }
  }

  return true
}

const overEvery = (funcs?: Func[]) => {
  return <TArgs extends any[]>(...args: TArgs): boolean => {
    if (!funcs) {
      return overEveryIdentity(args)
    } else {
      for (const arg of args) {
        for (const f of funcs) {
          if (!!f(arg) !== true) {
            return false
          }
        }
      }
      return true
    }
  }
}

export default overEvery
