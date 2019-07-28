import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import LazyLoad from 'react-lazyload'

import styles from './TravelCard.module.scss'

export interface IProps {
  readonly title: string
  readonly description: string
  readonly img: string
  readonly className?: string
}

export const TravelCard: React.FC<IProps> = ({ title, description, img, className }) => {

  return (
    <li className={classNames(styles.travelCard, className)}>
      <div className={styles.text}>
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
      <Link href="#">
        <a>
          <div className={styles.gradient} />
          <LazyLoad height={300} offset={500}>
            <img src={img} alt="travel blog" />
          </LazyLoad>
        </a>
      </Link>
    </li>
  )
}