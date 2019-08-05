import classNames from 'classnames'
import React from 'react'

import styles from './Rating.module.scss'

export interface IProps {
  readonly value: number
  readonly detail?: boolean
  readonly className?: string
}

export const Rating: React.FC<IProps> = ({ value, detail = false, className }) => {
  const stars = [...Array(5).keys()].map(idx => {
    const filled = idx + 1 <= Math.floor(value)
    return <i key={idx} className={`fa${filled ? 's' : 'r'} fa-star`} data-filled={filled} />
  })
  const rootClass = classNames(styles.rating, className)

  return (
    <div className={rootClass}>
      {stars}
      {detail && <span>{value} from 5</span>}
    </div>
  )
}
