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

const widths = {
  image63: ['1520', '1048', '952', '304'],
  image64: ['1008w', '696', '632', '304'],
  image65: ['496w', '344', '312', '304'],
}

export const TravelStoryCard: React.FC<IProps> = ({ title, description, variant, gradDeg = 0, className }) => {
  const srcSet = `${images.w1920[variant]} ${widths[variant][0]}w, ${images.w1280[variant]} ${widths[variant][1]}w, ${
    images.w1024[variant]
  } ${widths[variant][2]}w, ${images.w320[variant]} ${widths[variant][3]}w`
  const sizes = `(max-width: 320px) ${widths[variant][3]}px, (max-width: 1024px) ${widths[variant][2]}px, (max-width: 1280px) ${
    widths[variant][1]
  }px, ${widths[variant][0]}px`
  const gradient = { backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }
  const mainClass = classNames(styles.travelStoryCard, className)
  return (
    <div className={mainClass} data-variant={variant}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className={styles.gradient} style={gradient} />
      <img srcSet={srcSet} src={images.w1920[variant].src} sizes={sizes} alt="Travel story card" />
    </div>
  )
}
