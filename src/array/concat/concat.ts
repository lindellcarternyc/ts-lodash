const concat = <T extends any[] = any[], U extends any[] = any[]>(array: T, ...values: U): Array<T | U> => {
  return [...array, ...values]
}

export default concat
