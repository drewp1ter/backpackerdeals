import React from 'react'

import classNames from 'classnames'
import { CardsWrapper } from 'components'
import { AuthenticCard } from '..'
import styles from './AuthenticSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const AuthenticSection: React.FC<IProps> = ({ className }) => (
  <CardsWrapper className={className} title="Authentic reviews from our travellers" linkTitle="Read all reviews">
    <ul className={classNames(styles.authenticSection, styles.blah)}>
      <AuthenticCard
        title="Easy and convenient booking"
        body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
        sign="Megan S."
        date="24.05.2012"
        rating={3}
      />
      <AuthenticCard
        title="Easy and convenient booking"
        body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
        sign="Megan S."
        date="24.05.2012"
        rating={3}
      />
      <AuthenticCard
        title="Easy and convenient booking"
        body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
        sign="Megan S."
        date="24.05.2012"
        rating={2}
      />
    </ul>
  </CardsWrapper>
)
