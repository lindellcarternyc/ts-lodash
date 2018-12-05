const fill = <T, U>($array: T[], value: U, start: number = 0, end?: number): Array<T | U> => {
  const endIdx: number = end === undefined ? $array.length : end < 0 ? 0 : end > $array.length ? $array.length : end

  for (let startIdx = start >= 0 ? start : 0; startIdx < endIdx; startIdx++) {
    ($array as any[])[startIdx] = value
  }
  return $array
}

export default fill
