import toPrecision from '../toPrecision'

function ceil(num: number): number

// tslint:disable-next-line:unified-signatures
function ceil(num: number, precision: number): number

function ceil(num: number, precision?: number): number {
  const f = precision === undefined
    ? toPrecision('ceil')
    : toPrecision('ceil', precision)

  return f(num)
}

export default ceil
