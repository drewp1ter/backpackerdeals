import * as React from 'react'

import images from './assets'
import styles from './InstagramCard.module.scss'

export interface IProps {
  readonly variant: keyof typeof images
}

export const InstagramCard: React.FC<IProps> = ({ variant }) => {
  return (
    <div className={styles.root}>
      <img src={images[variant]} />
    </div>
  )
}