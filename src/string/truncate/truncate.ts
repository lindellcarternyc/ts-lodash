interface ITruncateOptions {
  length: number
  omission: string
  separator: string | RegExp
}

const DefaultOptions: ITruncateOptions = {
  length: 30,
  omission: '...',
  separator: '',
}

const truncate = (str: string, options: Partial<ITruncateOptions> = DefaultOptions): string => {
  const length = options.length || DefaultOptions.length
  const omission = options.omission || DefaultOptions.omission
  const separator = options.separator || ''

  if (str.length <= length) {
    return str
  } else if (separator === '') {
    return str.slice(0, length - omission.length) + omission
  } else {
    const parts = str.split(separator)
    const resultArray: string[] = []
    let numChars = 0
    const separatorLength = typeof separator === 'string' ? separator.length : separator.source.length

    for (const part of parts) {
      if (numChars + part.length < length - separatorLength - omission.length) {
        resultArray.push(part)
        numChars += part.length + separatorLength
      }
    }

    let result: string
    if (typeof separator === 'string') {
      result = resultArray.join(separator)
    } else {
      result = resultArray.join(separator.source)
    }
    return result + omission
  }
}

export default truncate
