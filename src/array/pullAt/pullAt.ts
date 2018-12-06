const pullAt = <T>(array: T[], at: number | number[]): [T[], T[]] => {
  const pullIndicies = typeof at === 'number' ? [at] : at
  return array.reduce<[T[], T[]]>(
    (res, item, idx) => {
      const [remaining, pulled] = res
      if (pullIndicies.indexOf(idx) >= 0) {
        return [remaining, pulled.concat(item)]
      } else {
        return [remaining.concat(item), pulled]
      }
    },
    [[], []]
  )
}

export default pullAt
