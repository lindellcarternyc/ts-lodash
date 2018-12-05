const pull = <T>(array: T[], ...values: T[]): T[] => {
  return array.filter(value => values.indexOf(value) === -1)
}

export default pull
