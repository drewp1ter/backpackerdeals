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
        <Icon name="deal1" size="xl"/>
        <div>
          <p>3 days and</p>
          <p>2 nights</p>
        </div>
      </li>
      <li>
        <Icon name="deal9" size="xl"/>
        <div>
          <p>Start 7:00 am</p>
          <p>End 5.30 pm</p>
        </div>
      </li>
      <li>
        <Icon name="deal10" size="xl"/>
        <div>
          <p>Start & End</p>
          <p>Location</p>
        </div>
      </li>
      <li>
        <Icon name="deal12" size="xl"/>
        <div>
          <div className={styles.helpContainer}>
            <div className={styles.help}/>
            <div className={styles.subcard}>
              <p>Pick-up & Drop off Included</p>
              <p>From your hotel/hostel in Alice Springs</p>
            </div>
          </div>
          <p>Pick-up & Drop off</p>
          <p>Included</p>
        </div>
      </li>
      <li>
        <Icon name="deal14" size="xl"/>
        <div>
          <p>Fitness Level</p>
          <p>Medium</p>
        </div>
      </li>
      <li>
        <Icon name="deal16" size="xl"/>
        <div>
          <p>Meals</p>
          <p>Included</p>
        </div>
      </li>
    </ul>
  )
}
