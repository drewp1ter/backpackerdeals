import React from 'react'
import { ImageGallery } from '..'
// import './image-gallery-no-icon.scss'
import images from './assets'

// import "react-image-gallery/styles/css/image-gallery.css"

import classNames from 'classnames'
import styles from './TourInfoGallery.module.scss'

export interface IProps {
  readonly className?: string
}

export const TourInfoGallery: React.FC<IProps> = ({ className }) => {
  return (
    <div className={styles.galleryImages}>
      <ImageGallery items={images} />
    </div>
  )
}
