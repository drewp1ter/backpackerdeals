import * as React from 'react'

import images from './assets'
import styles from './InstagramCard.module.scss'

export interface IProps {
  readonly variant: keyof typeof images
}

export const InstagramCard: React.FC<IProps> = ({ variant }) => {
  return (
    <div className={styles.instagramCard}>
      <img
        srcSet={images[variant].srcSet}
        sizes="(max-width: 767px) 128px, (max-width: 1024px) 152px, (max-width: 1280px) 169px, 240px"
        src={images[variant].src}
        alt="Instagram card"
      />
    </div>
  )
}
