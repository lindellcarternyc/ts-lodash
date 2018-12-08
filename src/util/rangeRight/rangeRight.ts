import range from '../range'

function rangeRight(start: number): number[]

// tslint:disable-next-line:unified-signatures
function rangeRight(start: number, end: number): number[]

// tslint:disable-next-line:unified-signatures
function rangeRight(start: number, end: number, step: number): number[]

function rangeRight(start: number, end?: number, step?: number): number[] {
  let r: number[]

  if (end === undefined) {
    r = range(start)
  } else if (step === undefined) {
    r = range(start, end)
  } else {
    r = range(start, end, step)
  }

  return r.reverse()
}

export default rangeRight
