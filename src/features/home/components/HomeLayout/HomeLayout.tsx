import React from 'react'

import { CardsWrapper } from 'components'
import {
  ActivitiesSection,
  AuthenticSection,
  BookWithUsSection,
  LastMinuteDeal,
  PromoutingSection,
  TopDestinationsSection,
  TravelStoriesSection,
} from '..'
import { SearchTravelSection } from '../../containers'
import styles from './HomeLayout.module.scss'

export const HomeLayout: React.FC = () => {
  return (
    <>
      <SearchTravelSection className={styles.searchTravelSection} />
      <BookWithUsSection className={styles.section} />
      <TopDestinationsSection className={styles.section} />
      <ActivitiesSection className={styles.section} />
      <CardsWrapper className={styles.section} title="Last Minute Deals" linkTitle="View all minute deals">
        <LastMinuteDeal />
      </CardsWrapper>
      <TravelStoriesSection className={styles.section} />
      <AuthenticSection className={styles.section} />
      <PromoutingSection className={styles.section} />
    </>
  )
}
