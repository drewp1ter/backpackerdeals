import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import LazyLoad from 'react-lazyload'
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
    <li className={mainClass} data-variant={variant}>
      <div className={styles.text}>
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
      <Link href="#">
        <a>
          <div className={styles.gradient} style={gradient} />
          <LazyLoad height={300} offset={500}>
            <picture>
              <source media="(max-width: 440px)" srcSet={images.w320[variant]} />
              <source media="(max-width: 767px)" srcSet={images.w768[variant]} />
              <source media="(max-width: 1024px)" srcSet={images.w1024[variant]} />
              <source media="(max-width: 1279px)" srcSet={images.w1280[variant]} />
              <source media="(max-width: 1920px)" srcSet={images.w1920[variant]} />
              <img src={images.w1920[variant]} alt="Travel story card" />
            </picture>
          </LazyLoad>
        </a>
      </Link>
    </li>
  )
}
