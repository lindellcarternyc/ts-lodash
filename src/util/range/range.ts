function range(end: number): number[]

// tslint:disable-next-line:unified-signatures
function range(start: number, end: number): number[] 

// tslint:disable-next-line:unified-signatures
function range(start: number, end: number, step: number): number[]

function range(start: number, end?: number, step?: number): number[] {
  let startIdx: number
  let endIdx: number
  let delta: number

  if ( step === 0 ) {
    const times = Math.abs(start - end!)
    const res: number[] = []
    for (let i = 0; i < times; i++ ) {
      res.push(start)
    }
    return res
  }

  if ( end === undefined && step === undefined ) {
    if ( start < 0 ) {
      delta = -1
      startIdx = 0
      endIdx = start
    } else {
      startIdx = 0
      endIdx = start
      delta = 1
    }
  } else {
    startIdx = start
    endIdx = end!
    delta = step || 1
  }
  
  const r: number[] = []
  if ( delta >= 1 ) {
    for ( let i = startIdx; i < endIdx; i += delta) {
      r.push(i)
    }
  } else {
    for (let i = Math.max(startIdx, endIdx); i > Math.min(startIdx, endIdx); i += delta) {
      r.push(i)
    }
  }
  return r
}

export default range
