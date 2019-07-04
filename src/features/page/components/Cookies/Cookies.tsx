import React, { useEffect } from 'react'

import styles from './Cookies.module.scss'

export const Cookies: React.FC = () => {
  const [hasCookies, setCookies] = React.useState<boolean>(true)

  useEffect(() => {
    const hasCookie = getCookie('disallow_page_cookies')

    if (!hasCookie) {
      setCookies(false)
    }
  })

  const getCookie = (name: string) => {
    const regex = new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    const matches = document.cookie.match(regex)
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  const setCookie = (name: string, value: string, options?: { [key: string]: any }) => {
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

  const handleClick = () => {
    setCookie('disallow_page_cookies', 'true')
    setCookies(true)
  }

  const cookieStyles = {
    display: hasCookies ? 'none' : 'block',
  }

  return (
    <div style={cookieStyles} className={styles.cookiesStyle}>
      <div>
        <span>
          Backpacker Deals processes information about your visit using cookies to improve site performance, facilitate social media sharing
          and offer advertising tailored to your interests.
          <br/>
          By continuing to browse our site, you agree to the use of these cookies. For more
          information see our Terms & Conditions and Privacy Policy.{' '}
        </span>
        <button onClick={handleClick}>OK</button>
      </div>
    </div>
  )
}