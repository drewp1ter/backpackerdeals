import classNames from 'classnames'
import React, { useState } from 'react'

import { Button, Calendar, Input, Select } from 'components'
import styles from './AddToWishlist.module.scss'
import tour from './assets/tour.jpg'

export interface IProps {
  readonly className?: string
}

export const AddToWishlist: React.FC<IProps> = ({ className }) => {
  const [date, setDate] = useState<Date>()
  const [openCalendar, setOpenCalendar] = useState<boolean>(false)

  const toggleSelect = () => setOpenCalendar(!openCalendar)
  const closeSelect = () => setOpenCalendar(false)
  const handleChange = (date: Date) => {
    setOpenCalendar(false)
    setDate(date)
  }

  const selectIcon = () => <i className={classNames(styles.selectIcon, 'fas fa-calendar')} />

  return (
    <div className={classNames(styles.addToWishlist, className)}>
      <h5>ADD TO WISHLIST</h5>
      <div className={styles.tour}>
        <img src={tour} alt="tour" />
        <p>Alice Springs to Alice Springs</p>
        <p>Uluru Tour - 3 Days 2 Nights</p>
      </div>
      <label>Remind me on date</label>
      <Select
        className={styles.select}
        open={openCalendar}
        onClick={toggleSelect}
        onClickOutside={closeSelect}
        value={date && date.toLocaleDateString()}
        placeholder="Select date"
        size="lg"
        renderIcon={selectIcon}
      >
        <Calendar className={styles.calendar} onChange={handleChange} value={date || new Date()} />
      </Select>
      <Input className={styles.email} type="email" label="Email" placeholder="Email Address" labelID="wishlist-email" />
      <Button>Remind me</Button>
      <p>
        By clicking REMIND ME you agree that you are the owner of above email address. Your IP address will be logged. Please read our
        Privacy Policy. We hate spam and will send you only one reminder email on the above date
      </p>
    </div>
  )
}
