import * as React from 'react'

import { CardsWrapper, TopDestinationCard } from '..'
import styles from './TopDestinationsSection.module.scss'

export const TopDestinationsSection: React.FC = () => (
  <CardsWrapper title="Top Destinations" linkTitle="Explore more destinations">
    <div className={styles.topDestinations}>
      <TopDestinationCard
        className={styles.td1}
        title="Great Barrier Reef"
        country="Australia"
        size="md"
        variant="maskGroup16"
        gradDeg={219}
      />
      <TopDestinationCard className={styles.td2} title="Rotorua" country="New Zealand" size="sm" variant="maskGroup18" gradDeg={213} />
      <TopDestinationCard className={styles.td3} title="Bangkok" country="Thailand" size="md" variant="maskGroup20" gradDeg={234} />
      <TopDestinationCard className={styles.td4} title="Uluru" country="Australia" size="sm" variant="maskGroup17" gradDeg={201} />
      <TopDestinationCard className={styles.td5} title="Queenstown" country="New Zealand" size="md" variant="maskGroup19" gradDeg={245} />
      <TopDestinationCard className={styles.td6} title="Waitomo" country="New Zealand" size="sm" variant="maskGroup21" gradDeg={226} />
    </div>
  </CardsWrapper>
)
