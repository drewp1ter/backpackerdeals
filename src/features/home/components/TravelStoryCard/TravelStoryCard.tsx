import classNames from 'classnames'
import * as React from 'react'

import * as images from './assets'
import styles from './TravelStoryCard.module.scss'

export interface IProps {
  readonly title: string
  readonly description: string
  readonly variant: keyof typeof images.w1024
  readonly gradDeg?: number
  readonly className?: string
}

export const TravelStoryCard: React.FC<IProps> = ({ title, description, variant, gradDeg = 0, className }) => {
  const gradient = { backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }
  const mainClass = classNames(styles.travelStoryCard, className)
  return (
    <div className={mainClass} data-variant={variant}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className={styles.gradient} style={gradient} />
      <picture>
        <source media="(max-width: 440px)" srcSet={images.w320[variant]} />
        <source media="(max-width: 1024px)" srcSet={images.w1024[variant]} />
        <source media="(max-width: 1280px)" srcSet={images.w1280[variant]} />
        <source media="(max-width: 1920px)" srcSet={images.w1920[variant]} />
        <img src={images.w1920[variant]} alt="Travel story card" />
      </picture>
    </div>
  )
}
