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

import LazyLoad from 'react-lazyload'
import { SearchTravelSection } from '../../containers'
import styles from './HomeLayout.module.scss'

export const HomeLayout: React.FC = () => (
  <>
    <SearchTravelSection />
    <BookWithUsSection />
    <LazyLoad height={500} offset={400}>
      <TopDestinationsSection />
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <ActivitiesSection />
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <CardsWrapper title="Last Minute Deals" linkTitle="View all minute deals">
        <LastMinuteDeal />
      </CardsWrapper>
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <TravelStoriesSection />
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <AuthenticSection />
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <PromoutingSection />
    </LazyLoad>
    <LazyLoad height={500} offset={400}>
      <InstagramSection className={styles.instagramCards} />
    </LazyLoad>
  </>
)
