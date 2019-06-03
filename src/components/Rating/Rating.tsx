import classNames from 'classnames'
import React from 'react'

import styles from './Rating.module.scss'

export interface IProps {
  readonly rating: number
  readonly detail?: boolean
  readonly className?: string
}

export const Rating: React.FC<IProps> = ({ rating, detail = true, className }) => {
  const stars = [...Array(5).keys()].map(idx =>
    idx + 1 <= Math.floor(rating) ? (
      <i key={idx} className="fas fa-star" data-filled={true} />
    ) : (
      <i key={idx} className="far fa-star" data-filled={false} />
    )
  )

  return (
    <div className={classNames(styles.root, className)}>
      {stars}
      {detail && <span>{rating} from 5</span>}
    </div>
  )
}
