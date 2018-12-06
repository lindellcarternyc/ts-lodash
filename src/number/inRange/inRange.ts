function inRange(n: number, end: number): boolean
// tslint:disable-next-line:unified-signatures
function inRange(n: number, start: number, end: number): boolean
function inRange(n: number, start: number, end?: number): boolean {
  let low: number
  let high: number

  if ( end === undefined ) {
    low = 0
    high = start
  } else {
    low = Math.min(start, end)
    high = Math.max(start, end)
  }

  return n >= low && n <= high
}
export default inRange