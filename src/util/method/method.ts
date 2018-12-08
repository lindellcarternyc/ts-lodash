const method = <T, U>(path: string | string[]) => {
  const paths: string[] = typeof path === 'string' ? path.split('.') : path
  return <V extends any[]>(obj: T, ...args: V): U => {
    let currentValue: any = obj
    let validPath: boolean = true

    for (const currentPath of paths) {
      if ((currentValue as object).hasOwnProperty(currentPath)) {
        currentValue = currentValue[currentPath]
      } else {
        validPath = false
        break
      }
    }

    if (!validPath) {
      throw new Error(`${paths.join('.')} is NOT a valid path.`)
    } else if (typeof currentValue !== 'function') {
      throw new Error(`property [${paths.join('.')}] is NOT a function.`)
    } else {
      return currentValue(...args)
    }
  }
}

export default method
