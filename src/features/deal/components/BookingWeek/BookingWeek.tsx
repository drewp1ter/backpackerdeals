import classNames from 'classnames'
import React from 'react'

import { Calendar, Select } from 'components'
import { BookingDetails, CalendarButton, Sticker } from '..'
import styles from './BookingWeek.module.scss'
import events from './data'

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
  readonly isMobileView: boolean
  readonly isCloseAnimation: boolean
}

export class BookingWeek extends React.Component<IProps, IState> {
  private now: Date

  constructor(props: IProps) {
    super(props)
    this.now = new Date()
    this.state = {
      offsetWeek: 0,
      selectedEvent: -1,
      isOpenSmallCalendar: false,
      value: undefined,
      isMobileView: false,
      isCloseAnimation: false
    }
  }

  get days() {
    const { offsetWeek, isMobileView, value } = this.state
    const mSecsInWeek = 604800000
    const mSecsInAWeeks = mSecsInWeek * offsetWeek
    const mSecsInADay = 86400000
    const startWeekTime =
      isMobileView && value
        ? value.getTime() - mSecsInADay
        : new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() - this.now.getDay() + 1).getTime() + mSecsInAWeeks // monday
    return [...Array(isMobileView ? 3 : 7).keys()].map(day => new Date(startWeekTime + mSecsInADay * day))
  }

  handleResize = () => {
    const { isMobileView } = this.state
    screen.width < 768
      ? !isMobileView && this.setState({ isMobileView: true, selectedEvent: -1 })
      : isMobileView && this.setState({ isMobileView: false })
  }

  componentDidMount = () => {
    addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount = () => {
    removeEventListener('resize', this.handleResize)
  }

  handlePrevWeek = () => {
    const { offsetWeek } = this.state
    offsetWeek > 0 && this.setState({ offsetWeek: offsetWeek - 1, selectedEvent: -1 })
  }

  handleNextWeek = () => this.setState(prev => ({ ...prev, offsetWeek: prev.offsetWeek + 1, selectedEvent: -1 }))

  handleSelectEvent = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const selectedEvent = Number(currentTarget.dataset.idx)
    this.setState({ selectedEvent })
  }

  handleCloseBookingDetails = () => {
    this.setState({ isCloseAnimation: true })
    setTimeout(() => this.setState({ isCloseAnimation: false, selectedEvent: -1 }), 1000)
  }

  handleChangeSmallCalendar = (value: Date) => {
    const mSecsInWeek = 604800000
    this.setState({
      value,
      selectedEvent: -1,
      isOpenSmallCalendar: false,
      offsetWeek: ((value.getTime() - this.now.getTime()) / mSecsInWeek) | 0,
    })
  }

  handleClickSelect = () => {
    this.setState(prev => ({
      ...prev,
      isOpenSmallCalendar: !prev.isOpenSmallCalendar,
    }))
  }

  handleCloseSelect = () => this.setState({ isOpenSmallCalendar: false })

  selectIcon = () => <i className={classNames(styles.selectIcon, 'fas fa-calendar')} />

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

  renderEvents = () => {
    const { selectedEvent, isMobileView } = this.state
    const result: any = []
    const _events = isMobileView ? events.slice(0, 3) : events
    _events.forEach((event: any, idx: number) => {
      event.slots.forEach((slot: any) => {
        const group = result.find((item: any) => item.start_time === slot.slot.start_time && item.end_time === slot.slot.end_time)
        if (!group) {
          const newGroup = {
            start_time: slot.slot.start_time,
            end_time: slot.slot.end_time,
            events: new Array(isMobileView ? 3 : 7).fill(null),
          }
          newGroup.events[idx] = slot
          result.push(newGroup)
        } else {
          group.events[idx] = slot
        }
      })
    })
    return result.map((group: any, idx: number) => {
      return (
        <React.Fragment key={idx}>
          <li className={styles.eventTime}>
            <p>{group.start_time}</p>
            <div />
            <p>{group.end_time}</p>
          </li>

          {group.events.map((event: any, eventIdx: number) => {
            const mixIdx = eventIdx + ((isMobileView ? idx * 3 : idx * 7) + 1)
            const selected = selectedEvent === mixIdx && 'selected'
            return !event ? (
              <li key={mixIdx} className={styles.notAviable}>
                Not aviable
              </li>
            ) : (
              <li
                key={mixIdx}
                className={styles.event}
                data-type={selected || event.eventType || ''}
                data-last={eventIdx % 7 === 6}
                onClick={this.handleSelectEvent}
                data-idx={mixIdx}
              >
                {(event.eventType === 'topDeal' || event.eventType === 'soldOut' || event.eventType === 'lastMinuteDeal') && (
                  <Sticker className={styles.sticker} variant={event.eventType} size="sm" />
                )}
                {event.eventType === 'soldOut' ? (
                  <>
                    <div className={styles.priceAndSpaces} />
                    <CalendarButton className={styles.button} theme="green">
                      Add me to waitlist
                    </CalendarButton>
                  </>
                ) : (
                  <>
                    <div className={styles.priceAndSpaces}>
                      <p>AUD $1 300</p>
                      <p>17 spaces left</p>
                    </div>
                    <CalendarButton className={styles.button} theme={selected ? 'selected' : 'select'}>{`Select${
                      selected ? 'ed' : ''
                    }`}</CalendarButton>
                  </>
                )}
              </li>
            )
          })}
        </React.Fragment>
      )
    })
  }

  render = () => {
    const { className } = this.props
    const { isOpenSmallCalendar, value, isMobileView, selectedEvent, isCloseAnimation } = this.state
    const current = this.days[2]
    const bookingDetailsRow = isMobileView ? Math.ceil(selectedEvent / 3) : Math.ceil(selectedEvent / 7)

    return (
      <section className={classNames(styles.booking, className)}>
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
          limitHeight={false}
        >
          <Calendar
            className={styles.calendarMini}
            minDate={this.now}
            value={value}
            onChange={this.handleChangeSmallCalendar}
            disablePast={true}
          />
        </Select>
        <Calendar className={styles.calendarMobile} minDate={this.now} value={value} onChange={this.handleChangeSmallCalendar} disablePast={true} />
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
          <li className={styles.eventDetails} data-row={bookingDetailsRow} data-animation={isCloseAnimation}>
            <BookingDetails onClose={this.handleCloseBookingDetails} className={styles.bookingDetails} variant="inWeek" />
          </li>
          {bookingDetailsRow !== 0 && <li className={styles.dummy} data-row={bookingDetailsRow} />}
        </ul>
      </section>
    )
  }
}
