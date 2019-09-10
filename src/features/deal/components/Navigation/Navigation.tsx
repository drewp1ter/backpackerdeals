import classNames from 'classnames'
import React, { RefObject } from 'react'

import icons from './assets'
import styles from './Navigation.module.scss'

export interface IProps {
  readonly refs: { [key: string]: RefObject<HTMLDivElement | HTMLLIElement> }
  readonly className?: string
  readonly onClose?: () => void
}

export const Navigation: React.FC<IProps> = ({ className, refs, onClose }) => {
  const tabs = [
    { icon: icons.included, label: 'What is Included', refname: 'included' },
    { icon: icons.excluded, label: 'What is Excluded', refname: 'excluded' },
    { icon: icons.visit, label: 'Where we Visit', refname: 'whereWeVisit' },
    { icon: icons.video, label: 'Video' },
    { icon: icons.tour, label: 'Tour Map' },
    { icon: icons.details, label: 'Details Itinerary', refname: 'whatsToExpect' },
    { icon: icons.booking, label: 'Booking Calendar', refname: 'bookingCalendar' },
    { icon: icons.pickup, label: 'Pickup Locations' },
    { icon: icons.terms, label: 'Terms & Conditions', refname: 'terms' },
    { icon: icons.cancellation, label: 'Cancellation Policy', refname: 'policy' },
    { icon: icons.reviews, label: 'Reviews', refname: 'reviews' },
  ]

  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const refname = currentTarget.dataset.refname || ''
    refs[refname] && refs[refname].current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onClose && onClose()
  }

  return (
    <>
    <i onClick={onClose} className={classNames(styles.close, 'fas fa-times')} />
    <ul className={classNames(styles.navigation, className)}>
      {tabs.map((tab, index) => (
        <li key={index} data-refname={tab.refname} onClick={handleClick}>
          <div dangerouslySetInnerHTML={tab.icon} />
          <span>{tab.label}</span>
        </li>
      ))}
    </ul>
    </>
  )
}
