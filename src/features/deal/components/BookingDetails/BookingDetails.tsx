import React from 'react'

import { Button } from 'components'
import styles from './BookingDetails.module.scss'

export const BookingDetails: React.FC = () => {
  return (
    <div className={styles.bookingDetails}>
      <div className={styles.leftSection}>
        <h5>Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights</h5>

        <p className={styles.shedule}>
          <span>Start location: Alice Springs</span>
          <span>Finish location: Alice Springs</span>
        </p>
        <p className={styles.shedule}>
          <span>Start: Mar 15 2019, 07:00 AM</span>
          <span>Finish: Mar 17 2019, 07:00 AM</span>
        </p>

        <div className={styles.group}>
          <p>
            <span className={styles.category}>
              <b>Adult</b>
              <span>From 10 to 15 years</span>
            </span>
            <span className={styles.price}>AUD $1 200</span>
          </p>
          <p>
            <span className={styles.category}>4 Adults x AUD $1 000;</span>
          </p>
          <p>
            <span className={styles.category}>3 Adults x AUD $1 200; </span>
          </p>
          <p>
            <span className={styles.category}>1 Adult x AUD $1 400;</span>
          </p>
        </div>

        <div className={styles.group}>
          <span className={styles.category}>
            <b>Child</b>
            <span>From 10 to 15 years</span>
          </span>
          <span className={styles.price}>AUD $1 200</span>
        </div>

        <div className={styles.group}>
          <span className={styles.category}>
            <b>Family</b>
            <span>From 10 to 15 years</span>
          </span>
          <span className={styles.price}>AUD $1 200</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h4>AUD $13 690</h4>
        <Button>BOOK NOW</Button>
      </div>
    </div>
  )
}
