import React, { RefObject } from 'react'

import icons from './assets'

import styles from './Navigation.module.scss'

export interface IProps {
  readonly refs: { [key: string]: RefObject<HTMLDivElement | HTMLLIElement> }
}

export const Navigation: React.FC<IProps> = ({ refs }) => {
  const tabs = [
    { icon: icons.included, label: 'What is Included', refname: 'included' },
    { icon: icons.excluded, label: 'What is Excluded', refname: 'excluded' },
    { icon: icons.visit, label: 'Where we Visit', refname: 'whereWeVisit' },
    { icon: icons.video, label: 'Video' },
    { icon: icons.tour, label: 'Tour Map' },
    { icon: icons.details, label: 'Details Itinerary' },
    { icon: icons.booking, label: 'Booking Calendar' },
    { icon: icons.pickup, label: 'Pickup Locations' },
    { icon: icons.terms, label: 'Terms & Conditions', refname: 'terms' },
    { icon: icons.cancellation, label: 'Cancellation Policy', refname: 'policy' },
    { icon: icons.reviews, label: 'Reviews' },
  ]

  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const refname = currentTarget.dataset.refname || ''
    refs[refname] && refs[refname].current!.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <ul className={styles.dealNavigation}>
      {tabs.map((tab, index) => (
        <li key={index} data-refname={tab.refname} onClick={handleClick}>
          <div dangerouslySetInnerHTML={tab.icon} />
          <span>{tab.label}</span>
        </li>
      ))}
    </ul>
  )
}