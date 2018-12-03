const chunk = <T>(array: T[], size: number = 1): T[][] => {
  const chunks: T[][] = []

  for ( let idx = 0; idx < array.length; idx += size ) {
    const nextChunk = array.slice(idx, idx + size)
    chunks.push(nextChunk)
  }
  return chunks
}

export default chunk