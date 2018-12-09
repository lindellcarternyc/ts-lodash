import padNumRight from '../padNumberRight'

function ceil(n: number): number

// tslint:disable-next-line:unified-signatures
function ceil(n: number, precision: number): number

function ceil(n: number, precision?: number): number {
  if ( precision === undefined || precision === 0 ) {
    return Math.ceil(n)
  } else if ( precision > 0 ) {
    const [pre, post] = n.toString().split('.')
    if ( precision < post.length ) {
      const toRound = post.slice(precision - 1, 1) + '.' + post.slice(precision)
      const roundedPost = Math.ceil(parseFloat(toRound))
      const numString = `${pre}.${post.slice(0, precision - 1)}${roundedPost}`
      return parseFloat(numString)
    } else {
      return n
    }
  } else { // precision is a negative number
    const withoutDecimal = n.toString().split('.')[0]
    const precisionLength = withoutDecimal.length + precision - 1
    const [head, toRound] = [
      withoutDecimal.slice(0, precisionLength),
      withoutDecimal.slice(precisionLength)
        .split('')
    ]
    
    const resString = head + Math.ceil(parseFloat(toRound
      .slice(0, 1)
      .concat('.', ...toRound.slice(1))
      .join(''))
    ).toString()

    return parseFloat(padNumRight(resString, withoutDecimal.length))    
  }
}

export default ceil
