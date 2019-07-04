export const getCookie = (name: string): string | undefined => {
  const regex = new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  const matches = document.cookie.match(regex)
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const setCookie = (name: string, value: string, options?: { [key: string]: any }) => {
  const _options = options || {}
  const expires = _options.expires

  if (expires && expires.toUTCString) {
    _options.expires = expires.toUTCString()
  }

  let updatedCookie = name + '=' + encodeURIComponent(value)

  for (const key in _options) {
    if (_options.hasOwnProperty(key)) {
      const optionValue = _options[key]
      if (optionValue) {
        updatedCookie += `; ${key}=${optionValue}`
      }
    }
  }

  document.cookie = updatedCookie
}