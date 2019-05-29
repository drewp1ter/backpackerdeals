import * as React from 'react'

import styles from './InstagramCard.module.scss'

export interface IProps {
  readonly img: string
}

export const InstagramCard: React.FC<IProps> = ({ img }) => {
  return (
    <div className={styles.main}>
      <img src={img} />
    </div>
  )
}