import * as React from 'react'

import styles from './ActivityCard.module.scss'
import images from './assets'

export interface IProps {
  readonly title: string
  readonly variant: keyof typeof images
  readonly gradDeg?: number
}

export const ActivityCard: React.FC<IProps> = ({title, variant, gradDeg = 330}) => {
  return(
    <div className={styles.root}>
      <h3>{title}</h3>
      <span>24 Activities</span>
      <div style={{ backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }} />
      <img alt="" src={images[variant]} />
    </div>
  )
}