const matchestProperty = <T>(path: string | string[], value: T) => {
  return <U extends { [key: string]: any }>(obj: U): boolean => {
    const propertyPath = typeof path === 'string' 
      ? path.split('.') : path

    let matches: boolean = true
    let currentValue: any = obj
    for ( const currentPath of propertyPath ) {
      if ( (currentValue as object).hasOwnProperty(currentPath) ) {
        currentValue = currentValue[currentPath]
      } else {
        matches = false
        break
      }
    }

    return matches && currentValue === value
  }
}

export default matchestProperty