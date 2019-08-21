import classNames from 'classnames'
import React from 'react'

import { Button, Select } from 'components'
import { CalendarButton } from '..'
import styles from './BookingDetails.module.scss'

export interface IProps {
  readonly onClose?: () => void
  readonly className?: string
  readonly variant?: 'inMonth' | 'inWeek'
}

export const BookingDetails: React.FC<IProps> = ({ onClose, className, variant = 'inMonth' }) => {
  return (
    <div className={classNames(styles.bookingDetails, className)} data-variant={variant}>
      <i onClick={onClose} className={classNames(styles.close, 'fas fa-times')} />
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
          <div>
            <span className={styles.category}>
              <b>Adult</b>
              <span className={styles.adult}>From 10 to 15 years</span>
            </span>
            <span className={styles.price}>AUD $1 200</span>
            <Select className={styles.select} theme="defaultNoBorder" size="no" value="0" options={['0', '1', '2', '3']} />
          </div>
          <div>
            <span className={styles.category}>4 Adults x AUD $1 000;</span>
            <CalendarButton className={styles.button} theme="green">
              Group discount applied
            </CalendarButton>
          </div>
          <div>
            <span className={styles.category}>3 Adults x AUD $1 200; </span>
          </div>
          <div>
            <span className={styles.category}>1 Adult x AUD $1 400;</span>
          </div>
          <CalendarButton className={styles.buttonMobile} theme="green">
              Group discount applied
          </CalendarButton>
        </div>

        <div className={styles.group}>
          <div>
            <span className={styles.category}>
              <b>Child</b>
              <span>From 10 to 15 years</span>
            </span>
            <span className={styles.price}>AUD $1 200</span>
            <Select className={styles.select} theme="defaultNoBorder" size="no" value="0" options={['0', '1', '2', '3']} />
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <span className={styles.category}>
              <b>Family</b>
              <span>From 10 to 15 years</span>
            </span>
            <span className={styles.price}>AUD $1 200</span>
            <Select className={styles.select} theme="defaultNoBorder" size="no" value="0" options={['0', '1', '2', '3']} />
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <h4>AUD $13 690</h4>
        <Button>BOOK NOW</Button>
        <p className={styles.levy}>Levy of AUD $35 payable on the day</p>
        <p className={styles.total}>
          <span>Total saving:</span>
          <b>
            AUD <span>$1 200</span>
          </b>
        </p>
      </div>
    </div>
  )
}
