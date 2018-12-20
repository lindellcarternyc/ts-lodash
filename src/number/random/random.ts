const isFloating = (num: number): boolean => num.toString(10).indexOf('.') >= 0

type Upper = [number]
type LowerUpper = [number, number]
type UpperIsFloat = [number, boolean]
type LowerUpperIsFloat = [number, number, boolean]

type RandomParams = Upper | LowerUpper | UpperIsFloat | LowerUpperIsFloat

const handleRandom = (lower: number, upper: number, isFloat: boolean): number => {
  const randomNumber = Math.random() * (upper - lower) + lower
  return isFloat ? randomNumber : Math.floor(randomNumber)
}

const random = (...params: RandomParams): number => {
  if (params.length === 3) {
    return handleRandom(...params)
  } else if (params.length === 2) {
    if (typeof params[1] === 'boolean') {
      return handleRandom(0, params[0], params[1])
    } else {
      const [lower, upper] = params as LowerUpper
      const isFloat = isFloating(lower) || isFloating(upper)
      return handleRandom(lower, upper, isFloat)
    }
  } else {
    const [upper] = params as Upper
    const isFloat = isFloating(upper)
    return handleRandom(0, upper, isFloat)
  }
}

export default random
