type TransformFunc<T, U> = (value: T) => U

const handlePull = <T, U>(array: T[], values: T[], func: TransformFunc<T, U>): T[] => {
  const mappedValues = values.map(func)
  return array.filter(item => {
    const transformed = func(item)
    return mappedValues.indexOf(transformed) === -1
  })
}

const pullAllBy = <T, U, K extends keyof T>(array: T[], values: T[], transform: TransformFunc<T, U> | K): T[] => {
  if (typeof transform === 'function') {
    return handlePull(array, values, transform)
  }

  return handlePull(array, values, item => item[transform])
}

export default pullAllBy
