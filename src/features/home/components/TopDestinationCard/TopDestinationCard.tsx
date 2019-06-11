import classNames from 'classnames'
import React from 'react'

import styles from './TopDestinationCard.module.scss'

export interface IProps {
  readonly title: string
  readonly country: string
  readonly img: string
  readonly width: 'sm' | 'md'
  readonly height: 'sm' | 'md' | 'lg'
  readonly gradDeg?: number
  readonly className?: string
}

export const TopDestinationCard: React.FC<IProps> = ({ title, country, img, width, height, gradDeg = 0, className }) => {
  const rootClass = classNames(styles.topDestinationCard, className)
  return (
    <div className={rootClass} data-width={width} data-height={height}>
      <div>
        <span>{country}</span>
        <h3>{title}</h3>
      </div>
      <div style={{ backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }} />
      <img alt="Top destination card" src={img} />
    </div>
  )
}
