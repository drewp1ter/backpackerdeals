import React from 'react'

import styles from './DealLayout.module.scss'

import { TourDescription, DealNavigation } from '..'

export const DealLayout: React.FC = () => (
  <div className={styles.dealLayout}>
    <DealNavigation />
    <TourDescription />
  </div>
)