import * as React from 'react'
import classNames from 'classnames'

import styles from './authenticCard.scss'

export interface IProps {
  title: string
  body: string
  sign: string
  date: string
  className?: string
}

const AuthenticCard: React.FC<IProps> = ({ title, body, className, sign, date }) => {
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

export default AuthenticCard
