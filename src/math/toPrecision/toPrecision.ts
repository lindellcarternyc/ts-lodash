import padNumRight from '../padNumberRight'

type Operation = 'ceil' | 'floor'

type NumFunc = (num: number) => number

const getOperationFunc = (operation: Operation): NumFunc => {
  return operation === 'ceil'
    ? Math.ceil
    : Math.floor
}

const handleNoPrecision = (func: NumFunc) => (num: number): number => func(num)

const handlePositivePrecision = (func: NumFunc, precision: number) => (num: number): number => {
  const [preDot, postDot] = num.toString().split('.')

    if ( precision >= postDot.length ) {
      return num
    } else {
      const head = postDot.slice(0, precision - 1)
      const tail = postDot.slice(precision - 1, precision) + '.' + postDot.slice(precision)
      const adjustedTail = func(parseFloat(tail))
      const numString = `${preDot}.${head}${adjustedTail}`
      return parseFloat(numString)
    }
}

const handleNegativePrecision = (func: NumFunc, precision: number) => (num: number): number => {
  const withoutDot = num.toString().split('.')[0]
    const precisionLength = withoutDot.length + precision - 1
    
    const head = withoutDot.slice(0, precisionLength)
    const tail = withoutDot.slice(precisionLength).split('')

    const adjustedTail = func(
      parseFloat(
        tail
          .slice(0, 1)
          .concat('.', ...tail.slice(1))
          .join('')
      )
    )

    return parseFloat(
      padNumRight(head + adjustedTail.toString(), withoutDot.length)
    )
}

function toPrecision(operation: Operation): NumFunc
// tslint:disable-next-line:unified-signatures
function toPrecision(operation: Operation, precision: number): NumFunc

function toPrecision(operation: Operation, precision?: number): NumFunc {
  const f = getOperationFunc(operation)
  const handler: NumFunc = 
    (precision === undefined || precision === 0)
      ? handleNoPrecision(f)
      : precision > 0
        ? handlePositivePrecision(f, precision)
        : handleNegativePrecision(f, precision)

  return num => handler(num)
}

export default toPrecision
