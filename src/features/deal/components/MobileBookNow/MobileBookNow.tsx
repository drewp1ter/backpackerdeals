import classNames from 'classnames'
import React from 'react'

import { Button } from 'components'
import styles from './MobileBookNow.module.scss'

export interface IProps {
  readonly className?: string
}

export const MobileBookNow: React.FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles.mobileBookNow, className)}>
      <Button className={styles.bookButton} form="rectangled" size="xl">
        <strong>BOOK NOW</strong>
      </Button>
      <button className={styles.menuIcon}>
        <i className="fas fa-bars" />
      </button>
    </div>
  )
}
