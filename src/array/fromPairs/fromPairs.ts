type Pair<T> = [string, T]

const fromPairs = <T>(pairs: Array<Pair<T>>) => { 
  return pairs.reduce<{[key: string]: T}>((result, [itemKey, item]) => { 
    return {
      ...result,
      [itemKey]: item 
    }
  }, { })
}

export default fromPairs