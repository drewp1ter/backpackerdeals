import classNames from 'classnames'
import React from 'react'

import { Icon } from 'components'
import styles from './TourIcons.module.scss'

export interface IProps {
  readonly className?: string
}

export const TourIcons: React.FC<IProps> = ({ className }) => {
  return (
    <ul className={classNames(styles.tourIcons, className)}>
      <li>
        <Icon name="deal1" />
        <p>3 days and</p>
        <p>2 nights</p>
      </li>
      <li>
        <Icon name="deal9" />
        <p>Start 7:00 am</p>
        <p>End 5.30 pm</p>
      </li>
      <li>
        <Icon name="deal10" />
        <p>Start & End</p>
        <p>Location</p>
      </li>
      <li>
        <Icon name="deal12" />
        <div className={styles.subcard}>
          <div className={styles.help} />
          <p>Pick-up & Drop off Included</p>
          <p>From your hotel/hostel in Alice Springs</p>
        </div>
      </li>
      <li>
        <Icon name="deal14" />
        <p>Fitness Level</p>
        <p>Medium</p>
      </li>
      <li>
        <Icon name="deal16" />
        <p>Meals</p>
        <p>Included</p>
      </li>
    </ul>
  )
}
