import * as React from 'react'

import {
  ActivitiesSection,
  AuthenticSection,
  BookWithUsSection,
  CardsWrapper,
  InstagramSection,
  LastMinuteDeal,
  SearchTravelSection,
  TopDestinationsSection,
  TravelStoriesSection,
} from '..'

import images from './assets'
import styles from './HomeLayout.module.scss'

export const HomeLayout: React.FC = () => (
  <>
    <SearchTravelSection />
    <BookWithUsSection />
    <TopDestinationsSection />
    <ActivitiesSection />

    <CardsWrapper title="Last Minute Deals" linkTitle="View all minute deals">
      <LastMinuteDeal />
    </CardsWrapper>

    <TravelStoriesSection />
    <AuthenticSection />

    <CardsWrapper title="Promoting the best of" linkTitle="Learn more">
      <div className={styles.cardsRow}>
        <img alt="logo" src={images.p1} />
        <img alt="logo" src={images.p2} />
        <img alt="logo" src={images.p3} />
        <img alt="logo" src={images.p4} />
        <img alt="logo" src={images.p5} />
        <img alt="logo" src={images.p6} />
      </div>
    </CardsWrapper>

    <InstagramSection className={styles.instagramCards} />
  </>
)
