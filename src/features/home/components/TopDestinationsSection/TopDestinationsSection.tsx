import React from 'react'

import { CardsWrapper } from 'components'
import { TopDestinationCard } from '..'
import styles from './TopDestinationsSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const TopDestinationsSection: React.FC<IProps> = ({ className }) => (
  <CardsWrapper className={className} title="Top Destinations" linkTitle="Explore more destinations">
    <ul className={styles.topDestinations}>
      <TopDestinationCard className={styles.td1} title="Great Barrier Reef" country="Australia" variant="maskGroup16" gradDeg={219} />
      <TopDestinationCard className={styles.td2} title="Rotorua" country="New Zealand" variant="maskGroup18" gradDeg={213} />
      <TopDestinationCard className={styles.td3} title="Bangkok" country="Thailand" variant="maskGroup20" gradDeg={234} />
      <TopDestinationCard className={styles.td4} title="Uluru" country="Australia" variant="maskGroup17" gradDeg={201} />
      <TopDestinationCard className={styles.td5} title="Queenstown" country="New Zealand" variant="maskGroup19" gradDeg={245} />
      <TopDestinationCard className={styles.td6} title="Waitomo" country="New Zealand" variant="maskGroup21" gradDeg={226} />
    </ul>
  </CardsWrapper>
)
