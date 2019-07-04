import React from 'react'
import { setCookie } from './CookieManager'

import classNames from 'classnames'
import styles from './Cookies.module.scss'

interface IProps {
  readonly className?: string,
  readonly onSetCookies: () => void
}

export const Cookies: React.FC<IProps> = ({onSetCookies, className}) => {
  const handleClick = () => {
    setCookie('disallow_page_cookies', 'true')
    onSetCookies();
  }

  return (
    <div className={classNames(styles.cookiesStyle, className)}>
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