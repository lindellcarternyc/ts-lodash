const sum = (numbers: number[]) => {
  return numbers.length < 1
    ? undefined
    : numbers.reduce((s, n) => s + n, 0)
}

export default sum
