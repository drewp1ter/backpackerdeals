import * as React from 'react'

import { Icon } from 'components'
import { CardsWrapper } from '..'

import styles from './BookWithUsSection.module.scss'

export const BookWithUsSection: React.FC = () => (
  <section className={styles.bookWithUsSection}>
    <CardsWrapper title="Why book with us?" linkTitle="Learn more">
      <ul>
        <li>
          <Icon name="liveAvailablityInstantConfirmations" size="md" />
          <p>Live Availablity</p>
        </li>
        <li>
          <Icon name="bestSelections" size="md" />
          <p>Best Selections</p>
        </li>
        <li>
          <Icon name="securePayment" size="md" />
          <p>100% Safe Payments</p>
        </li>

        <li>
          <Icon name="guarantee" size="md" />
          <p>100% Guarantee</p>
        </li>
        <li>
          <Icon name="liveChatExpertAgentAssistance" size="md" />
          <p>Live Chat</p>
        </li>
        <li>
          <Icon name="verifiedTourOperators" size="md" />
          <p>Verified Tour Operators</p>
        </li>
      </ul>
    </CardsWrapper>
  </section>
)
