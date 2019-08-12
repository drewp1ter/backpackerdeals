import classNames from 'classnames'
import React from 'react'

import styles from './ExposeTime.module.scss'

export interface IProps {
  readonly days: string
  readonly hours: string
  readonly minutes: string
  readonly size?: 'md' | 'lg'
  readonly className?: string
}

export const ExposeTime: React.FC<IProps> = ({ days, hours, minutes, size = 'md', className }) => {
  return (
    <div className={classNames(styles.exposeTime, className)} data-size={size}>
      <div className={styles.days}>
        <p>{days}</p>
        <label>Days</label>
      </div>
      <p className={styles.colon}>:</p>
      <div className={styles.hours}>
        <p>{hours}</p>
        <label>Hours</label>
      </div>
      <p className={styles.colon}>:</p>
      <div className={styles.minutes}>
        <p>{minutes}</p>
        <label>Minutes</label>
      </div>
    </div>
  )
}
