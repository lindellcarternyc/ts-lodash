const constant = <T>(value: T) => {
  return () => value
}

export default constant