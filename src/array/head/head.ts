const head = <T>(array: T[]): T | undefined => { 
  return array.length > 0 ? array[0] : undefined
}

export default head