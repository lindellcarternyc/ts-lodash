function clamp(n: number, upper: number): number
// tslint:disable-next-line:unified-signatures
function clamp(n: number, lower: number, upper: number): number
function clamp(n: number, lower: number, upper?: number): number {
  let upperBound = n
  let lowerBound = lower

  if (upper === undefined) {
    upperBound = lower
    lowerBound = 0
  } else {
    upperBound = upper
    lowerBound = lower
  }

  if (lowerBound > upperBound) {
    const temp = lowerBound
    lowerBound = upperBound
    upperBound = temp
  }

  if (n < lowerBound) {
    return lowerBound
  } else if (n > upperBound) {
    return upperBound
  }
  return n
}

export default clamp
