import classNames from 'classnames'
import React from 'react'

import { Icon } from 'components'
import { ExpectDay } from '..'
import map from './assets/map.png'
import styles from './WhatsToExpect.module.scss'

export interface IProps {
  readonly className?: string
}

export const WhatsToExpect: React.FC<IProps> = ({ className }) => {

  return (
    <div className={classNames(styles.whatsToExpect, className)}>
      <h3>What to expect</h3>
      <p>
        No trip to Australia is complete without visiting Uluru, in the ‘Red Centre’ - a region famous for its cultural connection, native
        vegetation and stunning landscape. This trip is the perfect choice for budget-conscious travellers looking to experience all that
        the region has to offer! It’s affordable and great fun!
      </p>
      <div className={styles.head}>
        <div className={styles.itinerary}>
          <h3>Itinerary</h3>
          <p>
            Expand all
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
      <ExpectDay body="THIS IS OVERFLOW Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over the sandstone domes" day={1} className={styles.expectDay} />
      <ExpectDay body="THIS IS NO OVERFLOW Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular Kings
        Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’ and witness the morning sun gleam
        over" day={2} className={styles.expectDay} />
    </div>
  )
}
