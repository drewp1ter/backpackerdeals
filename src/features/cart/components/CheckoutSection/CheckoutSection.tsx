import React from 'react'
import googleIcon from 'features/account/containers/Login/assets/google.png'
import { WithCard } from '../WithCard'
import styles from './CheckoutSection.module.scss'

export interface IProps {
  readonly title: string,
  readonly children?: JSX.Element | string
}

export const CheckoutSection: React.FC<IProps> = ({ title, children }) => {

  return (
    <WithCard className={styles.checkoutSection}>
      <>
        <h3>{title}</h3>
        {children}
        <div className={styles.oauthButtons}>
          <button className={styles.buttonFacebook}>
            <div>
              <i className="fab fa-facebook-square"/>
            </div>
            Log in with Facebook
          </button>
          <button className={styles.buttonGoogle}>
            <img src={googleIcon} alt="G"/>
            Log in with Google
          </button>
        </div>
      </>
    </WithCard>
  )
}
