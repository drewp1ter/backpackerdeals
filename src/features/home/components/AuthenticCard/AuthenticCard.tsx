import classNames from 'classnames'
import * as React from 'react'

import styles from './AuthenticCard.module.scss'

export interface IProps {
  readonly title: string
  readonly body: string
  readonly sign: string
  readonly date: string
  readonly rating: number
  readonly className?: string
}

export const AuthenticCard: React.FC<IProps> = ({ title, body, className, sign, date, rating }) => {
  const mainClass = classNames(styles.root, className)

  const stars = [...Array(5).keys()].map(idx => <i key={idx} className="fas fa-star" data-filled={idx + 1 <= rating} />)

  return (
    <div className={mainClass}>
      <div>
        <div className={styles.stars}>{stars}</div>
        <h3>{title}</h3>
        <div className={styles.body}>{body}</div>
        <a>Read more</a>
      </div>
      <div className={styles.sign}>
        {sign}
        <br />
        {date}
      </div>
    </div>
  )
}
