import identity from '../identity'

type Func<TResult> = (...args: any[]) => TResult

function over(): <TArgs extends any[]>(...args: TArgs) => TArgs[]
function over<TResult>(funcs: Array<Func<TResult>>): <TArgs extends any[]>(...args: TArgs)=> TResult[]
function over<TResult>(funcs?: Array<Func<TResult>>) {
  return <T extends any[]>(...args: T) => {
    if ( funcs === undefined ) {
      return [identity(args)]
    } else {
      return funcs.map(f => f(...args))
    }
  }
}

export default over
