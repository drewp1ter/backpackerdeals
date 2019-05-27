import * as React from 'react'
import classNames from 'classnames'

import styles from './deal.scss'

export interface IProps {
  title: string
  img: string
  className?: string
  discount?: string
}

const Deal: React.FC<IProps> = ({title, className, img, discount}) => {

  const mainClass = classNames(styles.main, className)

  return(
    <div className={mainClass}>
      <div className={styles.head}>
        <div className={styles.discount}>{discount} OFF</div>
      </div>
    </div>
  )
}

export default Deal