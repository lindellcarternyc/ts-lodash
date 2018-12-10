import toPrecision from '../toPrecision'

const round = (num: number, precision?: number): number => {
  const f = precision === undefined ? toPrecision('round') : toPrecision('round', precision)

  return f(num)
}

export default round
