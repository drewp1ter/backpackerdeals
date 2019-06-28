import * as React from 'react'

import classNames from 'classnames'
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
        <img src={images.activeTour.src} alt={images.activeTour.alt}/>
        <div className={styles.toSell}>
          <div className={styles.toSellIcon}>
            <img src={images.cup} alt=""/>
          </div>
          <div>Likely<br/> To Sell Out</div>
        </div>

        {renderGalleryControls()}
      </div>
      <div className={styles.tilesContainer}>
        {images.tours.map((tour, index) => (
          <div key={tour.alt} className={classNames(styles.tile, !index && styles.active )}>
            <img src={tour.src} alt={tour.alt}/>
          </div>
        ))}
        {renderGalleryControls()}
      </div>
    </div>
  )
}
