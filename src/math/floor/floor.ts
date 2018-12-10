import toPrecision from '../toPrecision'

function floor(num: number): number

// tslint:disable-next-line:unified-signatures
function floor(num: number, precision: number): number

function floor(num: number, precision?: number): number {
  const f = precision === undefined ? toPrecision('floor') : toPrecision('floor', precision)

  return f(num)
}

export default floor
