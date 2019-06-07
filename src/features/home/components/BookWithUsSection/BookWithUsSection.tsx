import * as React from 'react'

import { Icon } from 'components'
import { CardsWrapper } from '..'

import styles from './BookWithUsSection.module.scss'

export const BookWithUsSection: React.FC = () => (
  <section className={styles.bookWithUsSection}>
    <CardsWrapper title="Why book with us?" linkTitle="Learn more">
      <div className={styles.whyBook}>
        <div className={styles.icon}>
          <Icon name="liveAvailablityInstantConfirmations" size="md" />
          <p>Live Availablity</p>
        </div>
        <div className={styles.icon}>
          <Icon name="bestSelections" size="md" />
          <p>Best Selections</p>
        </div>
        <div className={styles.icon}>
          <Icon name="securePayment" size="md" />
          <p>100% Safe Payments</p>
        </div>

        <div className={styles.icon}>
          <Icon name="guarantee" size="md" />
          <p>100% Guarantee</p>
        </div>
        <div className={styles.icon}>
          <Icon name="liveChatExpertAgentAssistance" size="md" />
          <p>Live Chat</p>
        </div>
        <div className={styles.icon}>
          <Icon name="verifiedTourOperators" size="md" />
          <p>Verified Tour Operators</p>
        </div>
      </div>
    </CardsWrapper>
  </section>
)
