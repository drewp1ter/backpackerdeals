import classNames from 'classnames'
import React, { RefObject, useState } from 'react'

import { Icon } from 'components'
import { ExpectDay } from '..'
import map from './assets/map.png'
import styles from './WhatsToExpect.module.scss'

export interface IProps {
  readonly className?: string
  readonly navAnchor?: RefObject<HTMLDivElement>
}

export interface IState {
  readonly isExpanded: number
  readonly isAnimated: number
  readonly isOpen: boolean
}

export const WhatsToExpect: React.FC<IProps> = ({ className, navAnchor }) => {
  const [isExpanded, setExpanded] = useState<number>(3)
  const [isAnimated, setAnimation] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleToggle = () => setIsOpen(!isOpen)

  const handleClick = (value: number) => {
    if (isExpanded & value) {
      setAnimation(isAnimated + value)
      setTimeout(() => setAnimation(0), 800)
    }
    setExpanded(isExpanded ^ value)
  }

  const handleExpandAll = () => {
    if (isExpanded) {
      setAnimation(isExpanded)
      setExpanded(0)
      setTimeout(() => setAnimation(0), 800)
    } else {
      setExpanded(3)
    }
  }

  return (
    <section className={classNames(styles.whatsToExpect, className)} data-open={isOpen}>
      <div className={styles.anchor} ref={navAnchor} />
      <div onClick={handleToggle} className={styles.header}>
        <h3>What to expect</h3>
        <i className="fas fa-chevron-up" />
      </div>
      <div className={styles.body}>
        <p>
          No trip to Australia is complete without visiting Uluru, in the ‘Red Centre’ - a region famous for its cultural connection, native
          vegetation and stunning landscape. This trip is the perfect choice for budget-conscious travellers looking to experience all that
          the region has to offer! It’s affordable and great fun!
        </p>
        <div className={styles.head}>
          <div className={styles.itinerary}>
            <h3>Itinerary</h3>
            <p onClick={handleExpandAll} data-expanded={!!isExpanded}>
              {isExpanded ? 'Collapse all' : 'Expand all'}
              <i className="fas fa-angle-double-down" />
            </p>
          </div>
          <div className={styles.location}>
            <Icon name="deal17" size="md" />
            <span>Pickup Locations</span>
            <button>
              <i className="fas fa-map-marker-alt" />
              <img src={map} alt="" />
              <span>Tour map</span>
            </button>
          </div>
        </div>
        <ExpectDay
          isAnimated={isAnimated}
          isExpanded={isExpanded}
          onClick={handleClick}
          body="THIS IS OVERFLOW Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes"
          day={1}
          className={styles.expectDay}
        />
        <ExpectDay
          isAnimated={isAnimated}
          isExpanded={isExpanded}
          onClick={handleClick}
          body="THIS IS OVERFLOW Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes"
          day={2}
          className={styles.expectDay}
        />
        <ExpectDay
          isAnimated={isAnimated}
          isExpanded={isExpanded}
          onClick={handleClick}
          body="THIS IS NO OVERFLOW Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over"
          day={3}
          className={styles.expectDay}
        />
      </div>
    </section>
  )
}
