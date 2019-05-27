import * as React from 'react'

import { ActivityCard } from 'components'
import styles from './activitiesToursThings.scss'

const ActivitiesToursThings: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Activities, Tours & Things To Do</h1>
      <a className={styles.showMore}>Show More >></a>
      <div className={styles.cardsRow}>
        <ActivityCard title="Dive & Snorkelling" img="lol" />
        <ActivityCard title="Multi-days Tours" img="lol" />
        <ActivityCard title="Surfing & SUP" img="lol" />
        <ActivityCard title="Whale & dolphin watching" img="lol" />
      </div>
      <div className={styles.cardsRow}>
        <ActivityCard title="Classes & Workshops" img="lol" />
        <ActivityCard title="Skydiving" img="lol" />
        <ActivityCard title="Bungee Jumping" img="lol" />
        <ActivityCard title="Attractions" img="lol" />
      </div>
    </div>
  )
}

export default ActivitiesToursThings
