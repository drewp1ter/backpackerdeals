import * as React from 'react'

import { CardsWrapper } from '../CardsWrapper/'
import { Icon } from 'components/base'

import styles from './BookWithUsSection.module.scss'

export const BookWithUsSection: React.FC = () => (
  <section className={styles.bookWithUsSection}>
    <CardsWrapper title="Why book with us?" linkTitle="Learn more">
      <div className={styles.whyBook}>
        <div>
          <Icon name="liveAvailablityInstantConfirmations" size="md" />
          <span>Live Availablity</span>
        </div>
        <div>
          <Icon name="bestSelections" size="md" />
          <span>Best Selections</span>
        </div>
        <div>
          <Icon name="securePayment" size="md" />
          <span>100% Safe Payments</span>
        </div>
        <div>
          <Icon name="guarantee" size="md" />
          <span>100% Guarantee</span>
        </div>
        <div>
          <Icon name="liveChatExpertAgentAssistance" size="md" />
          <span>Live Chat</span>
        </div>
        <div>
          <Icon name="verifiedTourOperators" size="md" />
          <span>Verified Tour Operators</span>
        </div>
      </div>
    </CardsWrapper>
  </section>
)
