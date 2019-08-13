import classNames from 'classnames'
import React from 'react'

import { Calendar, Select } from 'components'
import { BookingDetails, CalendarButton, Sticker } from '..'
import styles from './BookingCalendarWeek.module.scss'
import { events } from './data'

const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly offsetWeek: number
  readonly selectedEvent: number
  readonly isOpenSmallCalendar: boolean
  readonly value: Date | undefined
}

export class BookingCalendarWeek extends React.Component<IProps, IState> {
  private now: Date

  constructor(props: IProps) {
    super(props)
    this.now = new Date()
    this.state = {
      offsetWeek: 0,
      selectedEvent: -1,
      isOpenSmallCalendar: false,
      value: undefined,
    }
  }

  get days() {
    const { offsetWeek } = this.state
    const weekTime = 604800000 * offsetWeek
    const dayTime = 86400000
    const startWeekTime =
      new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() - this.now.getDay() + 1).getTime() + weekTime // monday
    return [...Array(7).keys()].map(day => new Date(startWeekTime + dayTime * day))
  }

  handlePrevWeek = () => {
    const { offsetWeek } = this.state
    offsetWeek > 0 && this.setState({ offsetWeek: offsetWeek - 1, selectedEvent: -1 })
  }

  handleNextWeek = () => this.setState(prev => ({ ...prev, offsetWeek: prev.offsetWeek + 1, selectedEvent: -1 }))

  renderDay = (day: Date, idx: number) => {
    return (
      <li className={styles.header} key={`header-${idx}`}>
        <b>{DAYS_LONG[day.getDay()]}</b>
        <p>
          {day.getDate()} {MONTHS_LONG[day.getMonth()]}
        </p>
      </li>
    )
  }

  handleSelectEvent = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const selectedEvent = Number(currentTarget.dataset.idx)
    this.setState({ selectedEvent })
  }

  handleCloseBookingDetails = () => this.setState({ selectedEvent: -1 })

  handleChangeSmallCalendar = (value: Date) =>
    this.setState({ value, isOpenSmallCalendar: false, offsetWeek: ((value.getTime() - this.now.getTime()) / 604800000) | 0 })

  handleClickSelect = () => {
    this.setState(prev => ({
      ...prev,
      isOpenSmallCalendar: !prev.isOpenSmallCalendar,
    }))
  }

  handleCloseSelect = () => this.setState({ isOpenSmallCalendar: false })

  renderEvents = () => {
    const { selectedEvent } = this.state
    return (
      events &&
      events.map((event: any, idx: number) => {
        const selected = selectedEvent === idx && 'selected'
        return (
          <React.Fragment key={idx}>
            {idx % 7 === 0 && (
              <li className={styles.eventTime}>
                <p>10:00 AM</p>
                <div />
                <p>11:00 PM</p>
              </li>
            )}
            {this.days[idx % 7].getTime() <= this.now.getTime() ? (
              <li className={styles.notAviable}>Not aviable</li>
            ) : (
              <li
                className={styles.event}
                data-type={selected || event.eventType}
                onClick={this.handleSelectEvent}
                data-idx={idx}
              >
                {(event.eventType === 'topDeal' || event.eventType === 'soldOut' || event.eventType === 'lastMinuteDeal') && (
                  <Sticker className={styles.sticker} variant={event.eventType} />
                )}
                <div className={styles.priceAndSpaces}>
                  <p>AUD $1 300</p>
                  <p>17 spaces left</p>
                </div>
                {event.eventType === 'soldout' ? (
                  <CalendarButton className={styles.button} theme="green">
                    Add me to waitlist
                  </CalendarButton>
                ) : (
                  <CalendarButton className={styles.button} theme={selected ? 'selected' : 'select'}>{`Select${
                    selected ? 'ed' : ''
                  }`}</CalendarButton>
                )}
              </li>
            )}
          </React.Fragment>
        )
      })
    )
  }

  selectIcon = () => <i className={classNames(styles.selectIcon, 'fas fa-calendar')} />

  render = () => {
    const { className } = this.props
    const { isOpenSmallCalendar, value } = this.state
    const current = this.days[2]
    const bookingDetailsRow = Math.ceil((this.state.selectedEvent + 1) / 7)

    return (
      <div className={classNames(styles.bookingCalendarWeek, className)}>
        <h3>Booking calendar</h3>
        <Select
          open={isOpenSmallCalendar}
          onClick={this.handleClickSelect}
          onClickOutside={this.handleCloseSelect}
          className={styles.select}
          renderIcon={this.selectIcon}
          placeholder="Select date"
          theme="fillOrange"
          size="md"
        >
          <Calendar minDate={this.now} value={value} onChange={this.handleChangeSmallCalendar} />
        </Select>
        <div className={styles.navigation}>
          <span onClick={this.handlePrevWeek}>
            <i className="fas fa-chevron-left" />
            Previous Week
          </span>
          <b>
            {MONTHS_LONG[current.getMonth()]} {current.getFullYear()}
          </b>
          <span onClick={this.handleNextWeek}>
            Next Week <i className="fas fa-chevron-right" />
          </span>
        </div>
        <ul className={styles.calendarBody}>
          <li className={styles.header}>
            <p>Day</p>
            <p>Time</p>
          </li>
          {this.days.map(this.renderDay)}
          {this.renderEvents()}
          <li className={styles.eventDetails} data-row={bookingDetailsRow}>
            <BookingDetails onClose={this.handleCloseBookingDetails} className={styles.bookingDetails} variant="inWeek" />
          </li>
          {bookingDetailsRow !== 0 && <li className={styles.dummy} data-row={bookingDetailsRow} />}
        </ul>
      </div>
    )
  }
}
