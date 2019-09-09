import classNames from 'classnames'
import React from 'react'

import { TourOption } from '..'
import styles from './TourOptions.module.scss'

export interface IProps {
  readonly className?: string
}

export const TourOptions: React.FC<IProps> = ({ className }) => {
  return (
    <section className={classNames(styles.tourOptions, className)}>
      <h3>Tour options</h3>
      <TourOption
        body="Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’"
        className={styles.tourOption}
      />
      <TourOption
        body="Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’"
        className={styles.tourOption}
      />
      <TourOption
        body="Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’. Be ready for a 5.30 am pick up from your accommodation. You’ll soon be on your way to your first destination, the spectacular
          Kings Canyon. Here you will enjoy a 3-hour guided hike to the rim of the canyon to see the ‘Lost City’"
        className={styles.tourOption}
      />
    </section>
  )
}
