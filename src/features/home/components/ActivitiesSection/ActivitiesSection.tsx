import * as React from 'react'

import { ActivityCard, CardsWrapper } from '..'
import styles from './ActivitiesSection.module.scss'

export const ActivitiesSection: React.FC = () => (
  <CardsWrapper title="Activities, Tours & Things To D" linkTitle="Show more">
    <div className={styles.activitiesContainer}>
      <div className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Dive & Snorkelling" variant="diveSnorkelling" />
        <ActivityCard title="Multi-days Tours" variant="multidaysTours" />
        <ActivityCard title="Surfing & SUP" variant="surfingSUP" />
        <ActivityCard title="Whale & dolphin watching" variant="whaleDolphinWatching" gradDeg={209} />
      </div>

      <div className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Classes & Workshops" variant="classesWorkshops" />
        <ActivityCard title="Skydiving" variant="skydiving" gradDeg={209} />
        <ActivityCard title="Bungee Jumping" variant="bungeeJumping" />
        <ActivityCard title="Attractions" variant="attractions" />
      </div>
    </div>
  </CardsWrapper>
)
