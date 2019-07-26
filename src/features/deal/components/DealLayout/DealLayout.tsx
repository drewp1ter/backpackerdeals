import React from 'react'

import styles from './DealLayout.module.scss'

import { DealNavigation, TourDescription, TourInfoGallery, TourDetailsSection } from '..'

export const DealLayout: React.FC = () => (
  <div className={styles.dealLayout}>
    <DealNavigation />
    <TourDescription />
    <TourInfoGallery />
    <TourDetailsSection />
  </div>
)