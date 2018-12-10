const handleSearch = (str: string, target: string): boolean => {
  return str.slice(str.length - target.length) === target
}

const endsWith = (str: string, target: string, end?: number) => {
  const searchStr = end === undefined ? str.slice(str.length - target.length) : str.slice(0, end)
  return handleSearch(searchStr, target)
}

export default endsWith
