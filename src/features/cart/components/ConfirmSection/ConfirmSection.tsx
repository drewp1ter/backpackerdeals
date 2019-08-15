import React from 'react'
import { Button } from 'components/Button'
import styles from './ConfirmSection.module.scss'


export const ConfirmSection: React.FC = () => {

  return (
    <div className={styles.confirmSection}>
      <Button>Save and go to payment</Button>
      <span>By clicking on proceed to payment, you agree to all terms & conditions as set out by backpackerdeals.com</span>
    </div>
  )
}
