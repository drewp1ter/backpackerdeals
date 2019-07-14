import * as React from 'react'

import { circleScroll } from 'utils'
import { ActivityCard, CardsWrapper } from '..'
import styles from './ActivitiesSection.module.scss'

export const ActivitiesSection: React.FC = () => {
  let w320 = false

  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    w320 = screen.availWidth <= 320
    target.scrollTo(w320 ? 545 : 732, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({
      target,
      maxScrollRight: w320 ? 1750 : 2333,
      maxScrollLeft: w320 ? 45 : 56,
      offsetRight: w320 ? 1086 : 1451,
      offsetLeft: w320 ? 1130 : 1510,
    })

  const renderPart1 = (forCarousel: boolean = false) => (
    <ul className={styles.activitiesTourThingsCardsRow} data-hidden={forCarousel}>
      <ActivityCard title="Dive & Snorkelling" variant="diveSnorkelling" />
      <ActivityCard title="Multi-days Tours" variant="multidaysTours" />
      <ActivityCard title="Surfing & SUP" variant="surfingSUP" />
      <ActivityCard title="Whale & dolphin watching" variant="whaleDolphinWatching" gradDeg={209} />
    </ul>
  )

  const renderPart2 = (forCarousel: boolean = false) => (
    <ul className={styles.activitiesTourThingsCardsRow} data-hidden={forCarousel} data-bottom={true}>
      <ActivityCard title="Classes & Workshops" variant="classesWorkshops" />
      <ActivityCard title="Skydiving" variant="skydiving" gradDeg={209} />
      <ActivityCard title="Bungee Jumping" variant="bungeeJumping" />
      <ActivityCard title="Attractions" variant="attractions" />
    </ul>
  )

  return (
    <CardsWrapper title="Activities, Tours & Things To Do" linkTitle="Show more" linkURL="/catalog">
      <div ref={setStartPos} className={styles.activitiesContainer} onScroll={handleScroll}>
        {renderPart2(true)}
        {renderPart1()}
        {renderPart2()}
        <ul className={styles.activitiesTourThingsCardsRow} data-hidden={true}>
          <ActivityCard title="Dive & Snorkelling" variant="diveSnorkelling" />
        </ul>
      </div>
    </CardsWrapper>
  )
}
