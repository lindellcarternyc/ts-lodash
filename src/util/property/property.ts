type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> | undefined }

const property = (path: string | string[]) => {
  return <TResult extends any = any, TObj extends { [key: string]: any } = any>(obj: TObj) => {
    const paths = typeof path === 'string' ? path.split('.') : path

    let res = obj
    let validPath: boolean = true
    let brokenPath: string | undefined

    for (const p of paths) {
      if (res !== undefined && (res as object).hasOwnProperty(p)) {
        res = res[p]
      } else {
        validPath = false
        brokenPath = p
        break
      }
    }

    if (validPath === false) {
      throw new Error(`No propert at ${paths.join('.')}: INVALID PATH(${brokenPath})`)
    }
    return (res as unknown) as TResult
  }
}

export default property
