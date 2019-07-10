import * as React from 'react'

import {
  ActivitiesSection,
  AuthenticSection,
  BookWithUsSection,
  CardsWrapper,
  InstagramSection,
  LastMinuteDeal,
  PromoutingSection,
  TopDestinationsSection,
  TravelStoriesSection,
} from '..'

import { getOffset } from 'utils'

import LazyLoad from 'react-lazyload'
import { SearchTravelSection } from '../../containers'
import styles from './HomeLayout.module.scss'

export const HomeLayout: React.FC = () => {

  const offset = getOffset()

  return (
    <>
      <SearchTravelSection />
      <BookWithUsSection />
      <LazyLoad height={500} offset={offset}>
        <TopDestinationsSection />
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <ActivitiesSection />
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <CardsWrapper title="Last Minute Deals" linkTitle="View all minute deals">
          <LastMinuteDeal />
        </CardsWrapper>
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <TravelStoriesSection />
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <AuthenticSection />
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <PromoutingSection />
      </LazyLoad>
      <LazyLoad height={500} offset={offset}>
        <InstagramSection className={styles.instagramCards} />
      </LazyLoad>
    </>
  )
}
