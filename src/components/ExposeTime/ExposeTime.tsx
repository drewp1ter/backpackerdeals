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
      <div className={styles.daysBlock}>
        <p>{days}</p>
        <p className={styles.timeName}>Days</p>
      </div>
      <p className={styles.colon}>:</p>
      <div className={styles.hoursBlock}>
        <p>{hours}</p>
        <p className={styles.timeName}>Hours</p>
      </div>
      <p className={styles.colon}>:</p>
      <div className={styles.minutesBlock}>
        <p>{minutes}</p>
        <p className={styles.timeName}>Minutes</p>
      </div>
    </div>
  )
}
