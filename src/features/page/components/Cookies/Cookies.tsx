import React from 'react'

import styles from './Cookies.module.scss'

interface IProps {
  readonly setCookies: () => void
}

export const Cookies: React.FC<IProps> = ({ setCookies }) => (
  <div className={styles.cookiesStyle}>
    <span>
      Backpacker Deals processes information about your visit using cookies to improve site performance, facilitate social media sharing
      and offer advertising tailored to your interests.
      <br/>
      By continuing to browse our site, you agree to the use of these cookies. For more
      information see our Terms & Conditions and Privacy Policy.{' '}
    </span>
    <button
    onClick={setCookies}
    >OK</button>
  </div>
)