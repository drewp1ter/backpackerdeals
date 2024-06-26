import classNames from 'classnames'
import React from 'react'

import { Rating } from 'components'
import styles from './Review.module.scss'

export interface IProps {
  readonly title: string
  readonly author: string
  readonly rating: number
  readonly date: Date
  readonly body: string
  readonly likes: number
  readonly dislikes: number
  readonly className?: string
  readonly commentsCount: number
}

export const Review: React.FC<IProps> = ({ title, author, rating, date, body, likes, dislikes, commentsCount, className }) => {
  return (
    <div className={classNames(styles.review, className)}>
      <Rating value={rating} />
      <h6>{title}</h6>
      <p>
        {author} {date && date.toLocaleDateString()}
      </p>
      <p>{body}</p>
      <div className={styles.bottom}>
        <p>
          <span className={styles.shareAndComments}>
            <i className="fas fa-share-square" />
            <span>Share</span>
          </span>
          <span className={styles.shareAndComments}>
            <i className="fas fa-comment-alt" />
            <span>Comments ({commentsCount})</span>
          </span>
        </p>
        <p>
          <span>Was This Review Helpful?</span>
          <span><i className="fas fa-thumbs-up" />{likes}</span>
          <span><i className="fas fa-thumbs-down" />{dislikes}</span>
        </p>
      </div>
    </div>
  )
}
