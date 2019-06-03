import React from 'react'

import { HeaderCard } from '..'
import styles from './CatalogLayout.module.scss'

export const CatalogLayout: React.FC = () => (
  <>
    <HeaderCard
      title="Australia"
      description="Tours, day trips and activities in Australia"
      body="With year round sunshine, incredible beaches and some of the most cosmopolitan cities in the world,
      what’s not to love? Whether you want to dive the Great Barrier Reef, surf on Bondi Beach, sleep under the stars
      at Uluru or party the night away in Melbourne, we’ve got your Australian adventure covered! It’s time to head Down Under.
      Check out our Australia deals"
      rating={4.5}
      className={styles.card}
    />
  </>
)
