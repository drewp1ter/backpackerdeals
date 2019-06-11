import * as React from 'react'

import {
  ActivitiesSection,
  AuthenticCard,
  BookWithUsSection,
  CardsWrapper,
  InstagramCard,
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

    <CardsWrapper title="Authentic reviews from our travellers" linkTitle="Read all reviews">
      <div className={styles.cardsRow}>
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
      </div>
    </CardsWrapper>

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

    <CardsWrapper className={styles.instagramCards} title="Inspiration from our instagram" linkTitle="Follow us">
      <div className={styles.cardsRow}>
        <InstagramCard variant="v1" />
        <InstagramCard variant="v2" />
        <InstagramCard variant="v3" />
        <InstagramCard variant="v4" />
        <InstagramCard variant="v5" />
        <InstagramCard variant="v6" />
      </div>
    </CardsWrapper>
  </>
)
