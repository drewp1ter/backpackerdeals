import React from 'react'

import styles from './DealLayout.module.scss'

import {
  DealNavigation,
  DealsSection,
  OrderDetails,
  RelatedTravelBlogs,
  TourDescription,
  TourDetailsSection,
  TourIcons,
  TourInfoGallery,
} from '..'
import { recommendedDeals } from './data'

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
    <RelatedTravelBlogs />
    <DealsSection title="Recommended Deals" data={recommendedDeals} />
    <DealsSection title="Recently viewed deals" data={recommendedDeals} />
  </div>
)
