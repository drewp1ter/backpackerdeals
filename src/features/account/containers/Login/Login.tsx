import React from 'react'

import { Button, Input } from 'components'
import googleIcon from './assets/google.png'
import styles from './Login.module.scss'

export const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <h1>Log in</h1>
      <div className={styles.oauthButtons}>
        <button className={styles.buttonFacebook}>
          <i className="fab fa-facebook-square" />
          Log in with Facebook
        </button>
        <button className={styles.buttonGoogle}>
          <img src={googleIcon} alt="G" />
          Log in with Google
        </button>
      </div>
      <div className={styles.fields}>
        <h5>Log in with Email</h5>
        <Input
          className={styles.inputBox}
          label="Email"
          placeholder="Enter your email"
          theme="standart"
          size="md"
        />
        <div className={styles.forgotPass}>
          Forgot your password?<div className={styles.help}>?</div>
        </div>
        <Input
          className={styles.inputBox}
          label="Password"
          type="password"
          placeholder="Enter your password"
          theme="standart"
          size="md"
        />
      </div>
      <div className={styles.buttons}>
        <Button size="lg" theme="orange">Log in</Button>
        <Button size="lg" theme="transparentBorderOrange">Sign up</Button>
      </div>
    </div>
  )
}
