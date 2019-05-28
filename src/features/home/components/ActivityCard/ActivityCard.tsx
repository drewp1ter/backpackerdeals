import * as React from 'react'

import styles from './activityCard.scss'

export interface IProps {
  title: string
  img: string
}

const ActivityCard: React.FC<IProps> = ({title, img}) => {
  return(
    <div className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.activitiesCount}>24 Activities</span>
      <img className={styles.img} src={img} />
    </div>
  )
}

export default ActivityCard