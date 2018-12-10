const mean = (numbers: number[]) => {
  return numbers.length === 0 ? undefined : numbers.reduce((a, b) => a + b, 0) / numbers.length
}

export default mean
