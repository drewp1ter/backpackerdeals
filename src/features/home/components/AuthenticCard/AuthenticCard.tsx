import * as React from 'react'
import classNames from 'classnames'

import styles from './AuthenticCard.module.scss'

export interface IProps {
  readonly title: string
  readonly body: string
  readonly sign: string
  readonly date: string
  readonly className?: string
}

export const AuthenticCard: React.FC<IProps> = ({ title, body, className, sign, date }) => {
  const mainClass = classNames(styles.main, className)

  return (
    <div className={mainClass}>
      <div>
        <div className={styles.stars} />
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{body}</div>
        <a className={styles.readMore}>Read more</a>
      </div>
      <div className={styles.sign}>
        {sign}
        <br />
        {date}
      </div>
    </div>
  )
}