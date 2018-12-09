const toPath = (path: string): string[] => {
  return path.split('.').reduce<string[]>((res, p) => {
    const parts = p.split('[').map(x => (x.indexOf(']') === x.length - 1 ? x.slice(0, x.length - 1) : x))
    return res.concat(...parts)
  }, [])
}

export default toPath
