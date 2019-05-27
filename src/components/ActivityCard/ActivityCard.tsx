import * as React from 'react'
import classNames from 'classnames'

import styles from './activityCard.scss'

export interface IProps {
  title: string
  img: string
  className?: string
}

const ActivityCard: React.FC<IProps> = ({title, className, img}) => {

  const mainClass = classNames(styles.main, className)

  return(
    <div className={mainClass}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.activitiesCount}>24 Activities</span>
      <img className={styles.img} src={img} />
    </div>
  )
}

export default ActivityCard