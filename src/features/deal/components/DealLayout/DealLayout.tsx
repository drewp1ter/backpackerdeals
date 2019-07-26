import React from 'react'

import styles from './DealLayout.module.scss'

import { DealNavigation, TourDescription, TourDetailsSection, TourIcons, TourInfoGallery } from '..'

export const DealLayout: React.FC = () => (
  <div className={styles.dealLayout}>
    <DealNavigation />
    <TourDescription />
    <TourInfoGallery />
    <TourIcons />
    <TourDetailsSection />
  </div>
)