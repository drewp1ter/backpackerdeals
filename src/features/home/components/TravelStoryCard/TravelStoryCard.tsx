import * as React from 'react'

import styles from './TravelStoryCard.module.scss'

export interface IProps {
  readonly title: string
  readonly description: string
  readonly variant: 'lg' | 'md' | 'sm'
  readonly img: string
  readonly gradDeg?: number
}

export const TravelStoryCard: React.FC<IProps> = ({ title, description, img, variant, gradDeg = 0 }) => {
  return (
    <div className={styles.root} data-variant={variant}>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div style={{ backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }} />
      <img alt="Travel story card" src={img} />
    </div>
  )
}
