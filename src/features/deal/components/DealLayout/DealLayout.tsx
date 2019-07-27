import React from 'react'

import styles from './DealLayout.module.scss'

import { DealNavigation, TourDescription, TourDetailsSection, TourIcons, TourInfoGallery, OrderDetails } from '..'

export const DealLayout: React.FC = () => (
  <div className={styles.dealLayout}>
    <DealNavigation />
    <TourDescription />
    <div className={styles.header}>
      <div>
        <TourInfoGallery />
        <TourIcons />
      </div>
      <OrderDetails />
    </div>
    <TourDetailsSection />
  </div>
)
