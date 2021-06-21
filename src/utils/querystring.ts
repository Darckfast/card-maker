export const querystring = (obj: any, prefix?: string): string => {
  const str = []
  let p

  for (p in obj) {
    const k = prefix ? prefix + '[' + p + ']' : p
    const v = obj[p]

    str.push(
      v !== null && typeof v === 'object'
        ? querystring(v, k)
        : encodeURIComponent(k) + '=' + encodeURIComponent(v)
    )
  }

  return str.join('&')
}

export const reverseQuerystring = (value: string, prefix?: string): any => {
  const params = decodeURIComponent(value).split('?')[1] ?? `${prefix}=${value}`

  if (params && params.length > 0) {
    const paramsAndValues = params.split('&')

    const parsed = {}
    paramsAndValues.forEach(paramAndValue => {
      const [key, value] = paramAndValue.split('=')

      if (key.includes('[')) {
        const subPrefixIndex = key.match(/\[/).index

        const prefix = key.substring(0, subPrefixIndex)
        const subPrefix = key.substring(subPrefixIndex + 1, key.length - 1)

        parsed[prefix] = {
          ...parsed[prefix],
          ...reverseQuerystring(value, subPrefix)
        }

        return
      }

      if (value === 'true' || value === 'false') {
        parsed[key] = value === 'true'
        return
      }

      parsed[key] = value
    })

    return parsed
  }
}
