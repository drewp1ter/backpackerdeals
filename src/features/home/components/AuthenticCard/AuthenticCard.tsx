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
    <div className={classNames(styles.root, className)}>
      <div>
        <Rating rating={rating} detail={false} />
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

