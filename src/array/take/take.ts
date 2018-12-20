const take = <T>(arr: T[], n?: number): T[] => {
  const res: T[] = []

  let end: number
  if ( n === undefined ) {
    end = 1
  } else if ( n <= 0 ) {
    end = 0
  } else {
    end = n
  }

  for ( let i = 0; i < end && i < arr.length; i++ ) {
    res.push(arr[i])
  }

  return res
}

export default take