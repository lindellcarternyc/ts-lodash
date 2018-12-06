const remove = <T>(array: T[], predicateFunc: PredicateFunction<T>): [T[], T[]] => {
  return array.reduce<[T[], T[]]>(
    ([remaining, removed], item) => {
      if (predicateFunc(item)) {
        return [remaining, removed.concat(item)]
      }
      return [remaining.concat(item), removed]
    },
    [[], []]
  )
}

export default remove
