import React from 'react'

import { CalendarBase } from 'components'
import { BookingDetails, CalendarButton, Sticker } from '..'
import styles from './BookingCalendar.module.scss'
import { DAYS, DAYS_US, MONTHS_LONG, MONTHS_SHORT } from './constants'

import { lastMinuteDeals, soldOuts, topDeals } from './data'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly monthsToRender: number
}

export class BookingCalendar extends CalendarBase<IProps, IState> {
  private navigation = React.createRef<HTMLUListElement>()

  constructor(props: IProps) {
    super(props)

    this.state = {
      ...this.state,
      monthsToRender: 12,
    }
  }

  scrollLeft = () => {
    const { current } = this.navigation
    if (current) {
      current.scrollTo({ left: current.scrollLeft - current.offsetWidth / 2, behavior: 'smooth' })
    }
  }

  scrollRight = () => {
    const { current } = this.navigation
    if (current) {
      current.scrollLeft + current.offsetWidth > current.scrollWidth - current.offsetWidth / 2 &&
        this.setState(prev => ({
          ...prev,
          monthsToRender: prev.monthsToRender + 12,
        }))
      current.scrollTo({ left: current.scrollLeft + current.offsetWidth / 2, behavior: 'smooth' })
    }
  }

  shiftByMonths = (offset: number) => {
    let months = this.nowMonth + (offset % 12)
    let years = this.nowYear + ((offset / 12) | 0)
    if (months > 11) {
      years += 1
      months -= 12
    }
    if (months < 0) {
      years -= 1
      months += 12
    }
    return {
      year: years,
      month: months,
    }
  }

  handleSelectDay = (idx: string) => {
    const selectedDay = Number(idx)
    this.setState({ selectedDay })
  }

  handleCloseBookingDetails = () => this.setState({ selectedDay: -1 })

  handleClickMonth = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    this.setState({ ...this.shiftByMonths(Number(currentTarget.dataset.offset)) })
  }

  renderDay = (day: Date | null, idx: number) => {
    const { month, year, selectedDay } = this.state
    enum DayTypes {
      dummy = 'dummy',
      topDeal = 'topDeal',
      lastMinuteDeal = 'lastMinuteDeal',
      soldOut = 'soldOut',
    }

    const dayType =
      (day === null && DayTypes.dummy) ||
      (topDeals.find(topDeal => this.isSameDay(topDeal, day)) && DayTypes.topDeal) ||
      (lastMinuteDeals.find(lastMinuteDeal => this.isSameDay(lastMinuteDeal, day)) && DayTypes.lastMinuteDeal) ||
      (soldOuts.find(soldOut => this.isSameDay(soldOut, day)) && DayTypes.soldOut)

    return (
      <li data-day-type={dayType} className={styles.day} key={`${year}-${month}-day-${idx}`}>
        {day && (
          <>
            {(dayType === DayTypes.topDeal || dayType === DayTypes.soldOut || dayType === DayTypes.lastMinuteDeal) && (
              <Sticker className={styles.sticker} variant={dayType} />
            )}
            <p className={styles.date}>
              {day.getDate()}
              <span>{MONTHS_SHORT[month]}</span>
            </p>
            <div className={styles.priceAndSpaces}>
              <p>AUD $1 300</p>
              <p>17 spaces left</p>
            </div>
            {dayType === DayTypes.soldOut ? (
              <CalendarButton className={styles.button} theme="green">
                Add me to waitlist
              </CalendarButton>
            ) : (
              <CalendarButton
                className={styles.button}
                theme={selectedDay === idx ? 'selected' : 'select'}
                data={idx}
                onClick={this.handleSelectDay}
              >{`Select${selectedDay === idx ? 'ed' : ''}`}</CalendarButton>
            )}
          </>
        )}
      </li>
    )
  }

  renderHeader = () => {
    return [...Array(7).keys()].map(dayOfWeek => (
      <li className={styles.header} key={dayOfWeek}>
        {this.isUSStandart ? DAYS_US[dayOfWeek] : DAYS[dayOfWeek]}
      </li>
    ))
  }

  renderNavigation = () => {
    const { month: currentMonth, year: currentYear, monthsToRender } = this.state
    return [...Array(monthsToRender).keys()].map(offsetMonth => {
      const { year, month } = this.shiftByMonths(offsetMonth)
      return (
        <li
          key={`${year}-${month}`}
          data-active={year === currentYear && month === currentMonth}
          data-offset={offsetMonth}
          onClick={this.handleClickMonth}
        >
          {MONTHS_LONG[month]} {year}
        </li>
      )
    })
  }

  render() {
    const { month, year, selectedDay } = this.state

    return (
      <div className={styles.bookingCalendar}>
        <h3>Booking calendar</h3>
        <h4>
          {MONTHS_LONG[month]} {year}
        </h4>
        <div className={styles.navigation}>
          <i className="fas fa-chevron-left" onClick={this.scrollLeft} />
          <ul ref={this.navigation} className={styles.navigation}>
            {this.renderNavigation()}
          </ul>
          <i className="fas fa-chevron-right" onClick={this.scrollRight} />
        </div>
        <ul className={styles.calendarBody}>
          {this.renderHeader()}
          {this.days.map(this.renderDay)}
          <li className={styles.dayDetails} data-week={Math.ceil((selectedDay + 1) / 7)}>
            <BookingDetails onClose={this.handleCloseBookingDetails} />
          </li>
        </ul>
      </div>
    )
  }
}
