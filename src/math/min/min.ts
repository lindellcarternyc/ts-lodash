const min = (array: number[]) => {
  return array.length > 0 
    ? Math.min(...array) : undefined
}

export default min
