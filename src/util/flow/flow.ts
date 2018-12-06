type Func = (...args: any[]) => any
const flow = (funcs: Func[]) => {
  return (...args: any[]) => {
    return funcs.reduce<any>((result, func, idx) => {
      if ( idx === 0 ) {
        return func(...args)
      }
      return func(result)
    }, undefined)
  }
}

export default flow