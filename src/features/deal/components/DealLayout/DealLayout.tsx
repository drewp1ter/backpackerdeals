import React from 'react'

import styles from './DealLayout.module.scss'

import {
  DealNavigation,
  DealsSection,
  FaqSection,
  OrderDetails,
  RelatedTravelBlogs,
  TourDescription,
  TourDetailsSection,
  TourIcons,
  TourInfoGallery
} from '..'
import { recommendedDeals } from './data'

export const DealLayout: React.FC = () => (
  <div className={styles.dealLayout}>
    <DealNavigation />
    <TourDescription className={styles.tourDescription} />
    <div className={styles.header}>
      <div>
        <TourInfoGallery className={styles.tourInfoGallery} />
        <TourIcons className={styles.tourIcons} />
      </div>
      <OrderDetails className={styles.orderDetails} />
    </div>
    <TourDetailsSection />
    <FaqSection className={styles.faqSection} />
    <RelatedTravelBlogs className={styles.relatedTravelBlogs} />
    <DealsSection className={styles.dealsSection} title="Recommended Deals" data={recommendedDeals} />
    <DealsSection className={styles.dealsSection} title="Recently viewed deals" data={recommendedDeals} />
  </div>
)
