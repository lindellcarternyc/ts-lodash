type ObjectType<T> = T extends Array<infer U> ? { [key: string]: U } : never

const zipObject = <T extends any[]>(keys: string[], values: T): ObjectType<T> => {
  const length = Math.min(keys.length, values.length)
  return keys.slice(0, length).reduce(
    (result, key, index) => {
      const item = values[index]
      return {
        ...result,
        [key]: item,
      }
    },
    {} as ObjectType<T>
  )
}

export default zipObject
