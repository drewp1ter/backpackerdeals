import * as React from 'react'

import { icons } from './assets'

import styles from './DealNavigation.module.scss'

const tabs = [
  { icon: icons.included, label: "What is Included" },
  { icon: icons.excluded, label: "What is Excluded" },
  { icon: icons.visit, label: "Where we Visit" },
  { icon: icons.visit, label: "Video" },
  { icon: icons.tour, label: "Tour Map" },
  { icon: icons.details, label: "Details Itinerary" },
  { icon: icons.booking, label: "Booking Calendar" },
  { icon: icons.pickup, label: "Pickup Locations" },
  { icon: icons.terms, label: "Terms & Conditions" },
  { icon: icons.cancellation, label: "Cancellation Policy" },
  { icon: icons.reviews, label: "Reviews" },
]

export const DealNavigation: React.FC = () => (
  <div className={styles.dealNavigation}>
    {tabs.map((tab, index) => (
      <div className={styles.icon} key={`${tab.label}-${index}`}>
        <img src={tab.icon} alt={tab.label} />
        <span>{tab.label}</span>
      </div>
    ))}
  </div>
) 