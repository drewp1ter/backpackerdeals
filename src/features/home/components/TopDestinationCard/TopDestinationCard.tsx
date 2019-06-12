import classNames from 'classnames'
import React from 'react'

import images, { w320 } from './assets'
import styles from './TopDestinationCard.module.scss'

export interface IProps {
  readonly title: string
  readonly country: string
  readonly variant: keyof typeof images
  readonly gradDeg?: number
  readonly className?: string
}

export const TopDestinationCard: React.FC<IProps> = ({ title, country, variant, gradDeg = 0, className }) => {
  const rootClass = classNames(styles.topDestinationCard, className)
  const gradient = { backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }
  const srcSet = `${images[variant].srcSet}, ${w320[variant]} ${variant === 'maskGroup16' || variant === 'maskGroup17' ? '100' : '144'}w`
  return (
    <div className={rootClass}>
      <div className={styles.text}>
        <span>{country}</span>
        <h3>{title}</h3>
      </div>
      <div className={styles.gradient} style={gradient} />
      <img
        srcSet={srcSet}
        sizes="(max-width: 767px) 100px, (max-width: 767px) 144px, (max-width: 1024px) 312px, (max-width: 1024px) 152px, (max-width: 1280px) 345px, (max-width: 1280px) 168px, 496px, 240px"
        src={images[variant].src}
        alt="Top destination card"
      />
    </div>
  )
}
