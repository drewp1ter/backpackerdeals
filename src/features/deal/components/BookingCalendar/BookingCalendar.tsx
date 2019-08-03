import React, { Component } from 'react'

import { BookingDetails, CalendarButton, Sticker } from '..'
import styles from './BookingCalendar.module.scss'
import { DAYS, DAYS_US, MONTHS_LONG, MONTHS_SHORT } from './constants'

import { lastMinuteDeals, soldOuts, topDeals } from './data'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly month: number
  readonly year: number
  readonly selectedDay: number
  readonly monthsToRender: number
}

export class BookingCalendar extends Component<IProps, IState> {
  get days(): Array<Date | null> {
    const { month, year } = this.state
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const offset = new Date(year, month, this.isUSStandart ? 1 : 0).getDay()
    const dummyDays = offset < 7 ? [...Array(offset).keys()].map(_day => null) : []
    return [...dummyDays, ...[...Array(daysInMonth).keys()].map(day => new Date(year, month, day + 1))]
  }

  public nowYear: number
  public nowMonth: number
  public isUSStandart: boolean
  private navigation = React.createRef<HTMLUListElement>()

  constructor(props: IProps) {
    super(props)
    const now = new Date()

    this.nowMonth = now.getMonth()
    this.nowYear = now.getFullYear()
    this.isUSStandart = now.toLocaleTimeString().search(/(AM|PM)/) !== -1

    this.state = {
      month: this.nowMonth,
      year: this.nowYear,
      selectedDay: -1,
      monthsToRender: 12,
    }
  }

  isSameDay = (a: Date | null, b: Date | null) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

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
