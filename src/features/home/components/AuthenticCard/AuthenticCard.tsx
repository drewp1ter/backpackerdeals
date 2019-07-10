import classNames from 'classnames'
import * as React from 'react'

import { Rating } from 'components'
import styles from './AuthenticCard.module.scss'

export interface IProps {
  readonly title: string
  readonly body: string
  readonly sign: string
  readonly date: string
  readonly rating: number
  readonly className?: string
}

export const AuthenticCard: React.FC<IProps> = ({ title, body, className, sign, date, rating }) => (
  <div className={classNames(styles.authenticCard, className)}>
    <div>
      <Rating className={styles.rating} rating={rating} detail={false} />
      <h3>{title}</h3>
      <p className={styles.body}>{body}</p>
      <a>Read more</a>
    </div>
    <div className={styles.sign}>
      {sign}
      <br />
      {date}
    </div>
  </div>
)
