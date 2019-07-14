import Link from 'next/link'
import React from 'react'

import styles from './ActivityCard.module.scss'
import * as images from './assets'

export interface IProps {
  readonly title: string
  readonly variant: keyof typeof images.w320
  readonly gradDeg?: number
}

export const ActivityCard: React.FC<IProps> = ({ title, variant, gradDeg = 330 }) => (
  <li className={styles.activityCard}>
    <h3>{title}</h3>
    <span>24 Activities</span>
    <Link href="#">
      <a>
        <div
          className={styles.gradient}
          style={{ backgroundImage: `linear-gradient(${gradDeg}deg, rgba(232, 232, 232, 0), rgba(0, 0, 0, 0.91))` }}
        />
        <picture>
          <source media="(max-width: 320px)" srcSet={images.w320[variant].src} />
          <source media="(max-width: 1024px)" srcSet={images.w1024[variant].src} />
          <source media="(max-width: 1280px)" srcSet={images.w1280[variant].src} />
          <source media="(max-width: 1920px)" srcSet={images.w1920[variant]} />
          <img src={images.w1920[variant]} alt="Activity" />
        </picture>
      </a>
    </Link>
  </li>
)
