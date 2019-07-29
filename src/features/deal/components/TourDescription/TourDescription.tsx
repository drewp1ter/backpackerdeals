import classNames from 'classnames'
import React from 'react'

import { Rating } from 'components'
import styles from './TourDescription.module.scss'

export interface IProps {
  readonly className?: string
}

export const TourDescription: React.FC<IProps> = ({ className }) => (
  <div className={classNames(styles.tourDescription, className)}>
    <div className={styles.descriptionHeader}>
      <h1>Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights</h1>

      <div className={styles.location}>
        <div className={styles.locationPart}>
          <i className="fas fa-map-marker-alt" />
          <span>Start location: Australia, Sydney</span>
        </div>
        <div className={styles.locationPart}>
          <i className="fas fa-flag-checkered" />
          <span>End location: Australia, Sydney</span>
        </div>
        <div className={styles.locationPart}>
          <i className="far fa-clock" />
          <span>2 days, 1 night</span>
        </div>
        <div className={styles.locationPart}>
          <Rating rating={4} detail={false} />
          <span>90 reviews</span>
        </div>
      </div>

      <p>Explore the Red Centre of Australia, a region famous for its cultural connection, unique wildlife and stunning landscapes!</p>
    </div>
  </div>
)
