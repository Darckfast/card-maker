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
