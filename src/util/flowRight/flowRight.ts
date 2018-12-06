type F = (...args: any[]) => any

const flowRight = (funcs: F[]) => {
  return (...args: any[]) => {
    return funcs.reduceRight<any>((result, func, index) => { 
      if ( index === funcs.length - 1) {
        return func(...args)
      }
      return func(result)
    }, undefined)
  }
}

export default flowRight