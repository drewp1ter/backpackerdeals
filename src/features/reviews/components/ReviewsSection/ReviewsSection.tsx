import React from 'react'

import { Rating, Button } from 'components'
import { IProps as IReviewProps } from '../Review'

import styles from './ReviewsSection.module.scss'

export interface IProps {
  readonly reviews: IReviewProps[]
  readonly rating: number
  readonly title: string
}

export const ReviewsSection: React.FC<IProps> = ({ reviews, title, rating }) => {

  return (
    <div className={styles.reviewsSection}>
      <h3>{title}</h3>
      <Rating value={rating} detail={true} />
    </div>
  )
}