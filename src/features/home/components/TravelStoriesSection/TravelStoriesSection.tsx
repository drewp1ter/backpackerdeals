import * as React from 'react'

import { CardsWrapper, TravelStoryCard } from '..'
import styles from './TravelStoriesSection.module.scss'

export const TravelStoriesSection: React.FC = () => (
  <CardsWrapper title="Travel stories" linkTitle="Read more">
    <ul className={styles.travelStories}>
      <TravelStoryCard
        title="HOW TO TRAVEL BY RV ON A BACKPACKER BUDGET"
        description="America, Backpacking Tips, Budget tips, Road Trip, RV"
        variant="image63"
        gradDeg={252}
        className={styles.item1}
      />
      <TravelStoryCard
        title="10 TIPS EVERY BACKPACKER SHOULD KNOW"
        description="America, Backpacking Tips, Budget tips"
        variant="image64"
        gradDeg={250}
        className={styles.item2}
      />
      <TravelStoryCard
        title="WHY I LOVE SOLO TRAVEL (AND WHY YOU WILL TO)"
        description="America, Backpacking Tips, Budget tips"
        variant="image65"
        gradDeg={234}
        className={styles.item3}
      />
    </ul>
  </CardsWrapper>
)
