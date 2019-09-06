import classNames from 'classnames'
import React from 'react'

import { Button } from 'components'
import styles from './BookNow.module.scss'

export interface IProps {
  readonly className?: string
}

export const BookNow: React.FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles.bookNow, className)}>
      <Button className={styles.bookButton} form="rectangled">
        <strong>BOOK NOW</strong>
      </Button>
      <button className={styles.menuIcon}>
        <i className="fas fa-bars" />
      </button>
    </div>
  )
}
