import React from 'react'
import {
  ConfirmSection,
  CheckoutSection,
  ContactSection,
  InstructionsSection,
  OrderDetails,
  ParticipantSection,
  Steps,
} from '..'
import styles from './CartLayout.module.scss'
import { steps } from './data'

export const CartLayout: React.FC = () => {

  return (
    <>
      <div className={styles.headerSection}>
        <Steps steps={steps} className={styles.steps}/>
      </div>

      <div className={styles.section}>
        <div className={styles.stickyWrapper}>
          <OrderDetails className={styles.orderDetails}/>
        </div>

        <CheckoutSection title="Get quick checkout">
          <p>
            Get quick checkout by autofill information using Facebook, Google or fill contacts by <u>youself</u>
          </p>
        </CheckoutSection>

        <ContactSection/>

        <ParticipantSection/>

        <InstructionsSection/>

        <ConfirmSection/>
      </div>
    </>
  )
}
