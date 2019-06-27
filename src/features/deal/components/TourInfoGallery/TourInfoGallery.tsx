import * as React from 'react'

import { images } from './assets'
import styles from './TourInfoGallery.module.scss'

export const TourInfoGallery: React.FC = () => {

  const renderGalleryControls = () => (
    <div className={styles.galleryControls}>
      <img src={images.control} alt="Control Left"/>
      <img src={images.control} alt="Control Right"/>
    </div>
  )

  return (
    <div className={styles.tourInfoGallery}>
      <div className={styles.activeTile}>
        <img src={images.test} alt=""/>
        <div className={styles.toSell}>
          <div className={styles.toSellIcon}>
            <img src={images.cup} alt=""/>
          </div>
          <div>Likely<br/> To Sell Out</div>
        </div>

        {renderGalleryControls()}
      </div>
      <div className={styles.tilesContainer}>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        <div className={styles.tile}>
          <img src={images.test} alt=""/>
        </div>
        {renderGalleryControls()}
      </div>
    </div>
  )
}
