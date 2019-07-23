import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import LazyLoad from 'react-lazyload'
import * as images from './assets'
import styles from './TopDestinationCard.module.scss'

export interface IProps {
  readonly title: string
  readonly country: string
  readonly variant: keyof typeof images.w320
  readonly gradDeg?: number
  readonly className?: string
}

export const TopDestinationCard: React.FC<IProps> = ({ title, country, variant, gradDeg = 0, className }) => {
  const rootClass = classNames(styles.topDestinationCard, className)
  const gradient = { backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }
  return (
    <li className={rootClass}>
      <div className={styles.text}>
        <span>{country}</span>
        <h4>{title}</h4>
      </div>
      <Link href="#">
        <a>
          <div className={styles.gradient} style={gradient} />
          <LazyLoad height={300} offset={500}>
            <picture>
              <source media="(max-width: 400px)" srcSet={images.w320[variant]} />
              <source media="(max-width: 767px)" srcSet={images.w768[variant]} />
              <source media="(max-width: 1024px)" srcSet={images.w1024[variant].src} />
              <source media="(max-width: 1279px)" srcSet={images.w1280[variant].src} />
              <source media="(max-width: 1920px)" srcSet={images.w1920[variant]} />
              <img src={images.w1920[variant]} alt="Top destination card" />
            </picture>
          </LazyLoad>
        </a>
      </Link>
    </li>
  )
}
