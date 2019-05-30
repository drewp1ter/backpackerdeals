import * as React from 'react'

import styles from './InstagramCard.module.scss'
import images from './assets'

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