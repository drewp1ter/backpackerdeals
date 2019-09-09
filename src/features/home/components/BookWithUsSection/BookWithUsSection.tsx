import classNames from 'classnames'
import React from 'react'

import { CardsWrapper, Icon } from 'components'
import styles from './BookWithUsSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const BookWithUsSection: React.FC<IProps> = ({ className }) => (
  <CardsWrapper className={classNames(styles.bookWithUsSection, className)} title="Why book with us?" linkTitle="Learn more">
    <ul>
      <li>
        <Icon name="liveAvailablityInstantConfirmations" size="xl" />
        <p>Live Availablity</p>
      </li>
      <li>
        <Icon name="bestSelections" size="xl" />
        <p>Best Selections</p>
      </li>
      <li>
        <Icon name="securePayment" size="xl" />
        <p>100% Safe Payments</p>
      </li>

      <li>
        <Icon name="guarantee" size="xl" />
        <p>100% Guarantee</p>
      </li>
      <li>
        <Icon name="liveChatExpertAgentAssistance" size="xl" />
        <p>Live Chat</p>
      </li>
      <li>
        <Icon name="verifiedTourOperators" size="xl" />
        <p>Verified Tour Operators</p>
      </li>
    </ul>
  </CardsWrapper>
)
