import classNames from 'classnames'
import React from 'react'

import styles from './Rating.module.scss'

export interface IProps {
  readonly rating: number
  readonly detail?: boolean
  readonly className?: string
}

export const Rating: React.FC<IProps> = ({ rating, detail = true, className }) => {
  const stars = [...Array(5).keys()].map(idx => {
    const filled = idx + 1 <= Math.floor(rating)
    return <i key={idx} className={`fa${filled ? 's' : 'r'} fa-star`} data-filled={filled} />
  })
  const rootClass = classNames(styles.rating, className)

  return (
    <div className={rootClass}>
      {stars}
      {detail && <span>{rating} from 5</span>}
    </div>
  )
}
