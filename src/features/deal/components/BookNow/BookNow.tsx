import classNames from 'classnames'
import React from 'react'

import { Button } from 'components'
import styles from './BookNow.module.scss'

export interface IProps {
  readonly className?: string
  readonly onClickMenu?: () => void
}

export const BookNow: React.FC<IProps> = ({ className, onClickMenu }) => {
  return (
    <div className={classNames(styles.bookNow, className)}>
      <Button className={styles.bookButton} form="rectangled">
        <strong>BOOK NOW</strong>
      </Button>
      <button className={styles.menuIcon} onClick={onClickMenu}>
        <i className="fas fa-bars" />
      </button>
    </div>
  )
}
