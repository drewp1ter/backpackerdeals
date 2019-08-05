import classNames from 'classnames'
import React, { useState } from 'react'

import { Pagenation, Rating } from 'components'
import { Filter, Review } from '..'
import reviews from './data'
// import { IProps as IReviewProps } from '../Review'

import styles from './ReviewsSection.module.scss'

export interface IProps {
  // readonly reviews: IReviewProps[]
  readonly rating: number
  readonly title: string
  readonly className?: string
}

export const ReviewsSection: React.FC<IProps> = ({ title, rating, className }) => {

  const [page, setPage] = useState<number>(1)

  const renderReviews = () => reviews.map((review, idx) => <Review key={idx} {...review} />)

  return (
    <div className={classNames(styles.reviewsSection, className)}>
      <h3>{title}</h3>
      <Rating value={rating} detail={true} />
      <Filter className={styles.filter} />
      {renderReviews()}
      <Pagenation className={styles.pagenation} value={page} onChange={setPage} maxPages={10} />
    </div>
  )
}