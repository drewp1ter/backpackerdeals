import React, { Component } from 'react'

import { DAYS, MONTHS_LONG, MONTHS_SHORT } from './constants'

import { Sticker, BookingDetails } from '..'
import styles from './BookingCalendar.module.scss'

import { lastMinuteDeals, soldOuts, topDeals } from './data'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly month: number
  readonly year: number
  readonly selectedDay: number
}

export class BookingCalendar extends Component<IProps, IState> {
  get days(): Array<Date | null> {
    const { month, year } = this.state
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const offset = new Date(year, month, 0).getDay()
    const dummyDays = offset < 7 ? [...Array(offset).keys()].map(_day => null) : []
    return [...dummyDays, ...[...Array(daysInMonth).keys()].map(day => new Date(year, month, day + 1))]
  }

  constructor(props: IProps) {
    super(props)

    const now = new Date()

    this.state = {
      month: now.getMonth(),
      year: now.getFullYear(),
      selectedDay: -1,
    }
  }

  isSameDay = (a: Date | null, b: Date | null) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  previousMonth = () => {
    const { month, year } = this.state
    this.setState({
      month: month !== 0 ? month - 1 : 11,
      year: month !== 0 ? year : year - 1,
    })
  }

  nextMonth = () => {
    const { month, year } = this.state
    this.setState({
      month: month !== 11 ? month + 1 : 0,
      year: month !== 11 ? year : year + 1,
    })
  }

  handleSelectDay = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    const selectedDay = Number(currentTarget.dataset.idx)
    this.setState({ selectedDay })
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
      <li data-day-type={dayType} className={styles.day} key={`${year}.${month}.day.${idx}`}>
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
              <button data-theme="wait" data-idx={idx}>
                Add me to waitlist
              </button>
            ) : (
              <button data-theme={`select${selectedDay === idx ? 'ed' : ''}`} data-idx={idx} onClick={this.handleSelectDay}>{`Select${
                selectedDay === idx ? 'ed' : ''
              }`}</button>
            )}
          </>
        )}
      </li>
    )
  }

  renderHeader = () =>
    [...Array(7).keys()].map(dayOfWeek => (
      <li className={styles.header} key={dayOfWeek}>
        {DAYS[dayOfWeek]}
      </li>
    ))

  render() {
    const { month, year, selectedDay } = this.state

    return (
      <div className={styles.bookingCalendar}>
        <div>
          <div onClick={this.previousMonth}>
            ◀
          </div>
          <div>
            {MONTHS_LONG[month]} {year}
          </div>
          <div onClick={this.nextMonth}>
            ▶
          </div>
        </div>
        <ul>
          {this.renderHeader()}
          {this.days.map(this.renderDay)}
          <li className={styles.dayDetails} data-week={Math.ceil((selectedDay + 1) / 7)}>
            <BookingDetails />
          </li>
        </ul>
      </div>
    )
  }
}
