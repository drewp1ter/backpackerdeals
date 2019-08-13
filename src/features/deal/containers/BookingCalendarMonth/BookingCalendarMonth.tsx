import classNames from 'classnames'
import React, { RefObject } from 'react'

import { Calendar, CalendarBase, Select } from 'components'
import { BookingDetails, CalendarButton, Sticker } from '../../components'
import { IDealState } from '../../reducer'
import styles from './BookingCalendarMonth.module.scss'
import { lastMinuteDeals, soldOuts, topDeals } from './data'

export interface IProps {
  readonly className?: string
  readonly navAnchor?: RefObject<HTMLDivElement>
}

export interface IState {
  readonly monthsToRender: number
  readonly selectedDay: number
  readonly isOpenSmallCalendar: boolean
  readonly value: Date | undefined
}

enum DayTypes {
  dummy = 'dummy',
  topDeal = 'topDeal',
  lastMinuteDeal = 'lastMinuteDeal',
  soldOut = 'soldOut',
}

type AllProps = IProps & Partial<IDealState>

export class BookingCalendarMonth extends CalendarBase<AllProps, IState> {
  private navigation = React.createRef<HTMLUListElement>()
  private bookingDetailsAnchor = React.createRef<HTMLDivElement>()

  constructor(props: IProps) {
    super(props)

    this.state = {
      ...this.state,
      monthsToRender: 12,
      selectedDay: -1,
      isOpenSmallCalendar: false,
      value: undefined,
    }
  }

  componentWillUpdate = (nextProps: AllProps) => {
    const { nextAviableDate } = nextProps
    if (this.props.nextAviableDate === nextAviableDate) {
      return
    }
    let monthsToRender = Number(nextAviableDate && ((nextAviableDate.getTime() - this.now.getTime()) / 2592000000) | 0)
    monthsToRender = monthsToRender > this.state.monthsToRender ? monthsToRender + 10 : this.state.monthsToRender
    const year = (nextAviableDate && nextAviableDate.getFullYear()) || 0
    const month = (nextAviableDate && nextAviableDate.getMonth()) || 0
    nextAviableDate &&
      this.setState(
        {
          year,
          month,
          selectedDay: nextAviableDate.getDate() + new Date(year, month, this.isUSStandart ? 1 : 0).getDay() - 1,
          monthsToRender,
        },
        () => this.bookingDetailsAnchor.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
      )
  }

  scrollLeft = () => {
    const { current } = this.navigation
    if (current) {
      current.scrollTo({ left: current.scrollLeft - current.offsetWidth - 50, behavior: 'smooth' })
    }
  }

  scrollRight = () => {
    const { current } = this.navigation
    current && current.scrollTo({ left: current.scrollLeft + current.offsetWidth - 50, behavior: 'smooth' })
  }

  handleNavScroll = ({ target }: any) => {
    target.scrollLeft + target.offsetWidth > target.scrollWidth - target.offsetWidth &&
      this.setState(prev => ({
        ...prev,
        monthsToRender: prev.monthsToRender + 12,
      }))
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

  handleSelectDay = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const { dayType } = currentTarget.dataset
    if (dayType === DayTypes.soldOut || dayType === DayTypes.dummy) {
      return
    }
    const selectedDay = Number(currentTarget.dataset.idx)
    this.setState({ selectedDay, value: this.days[selectedDay] as Date })
  }

  handleCloseBookingDetails = () => this.setState({ selectedDay: -1 })

  handleClickMonth = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    this.setState({ ...this.shiftByMonths(Number(currentTarget.dataset.offset)), selectedDay: -1 })
  }

  handleChangeSmallCalendar = (value: Date, selectedDay = -1) => {
    const months = ((value.getTime() - this.now.getTime()) / 2592000000) | 0
    this.setState(
      prev => ({
        ...prev,
        value,
        selectedDay,
        year: value.getFullYear(),
        month: value.getMonth(),
        isOpenSmallCalendar: false,
        monthsToRender: months > prev.monthsToRender ? months + 10 : prev.monthsToRender,
      }),
      () => {
        const navigation = this.navigation.current
        if (navigation) {
          const activeMonth = Array.from(navigation.children as HTMLCollectionOf<HTMLElement>).find(elem => elem.dataset.active === 'true')
          activeMonth && navigation.scrollTo({ left: activeMonth.offsetLeft - navigation.offsetWidth / 2, behavior: 'smooth' })
        }
      }
    )
  }

  handleClickSelect = () => {
    this.setState(prev => ({
      ...prev,
      isOpenSmallCalendar: !prev.isOpenSmallCalendar,
    }))
  }

  handleCloseSelect = () => this.setState({ isOpenSmallCalendar: false })

  renderDay = (day: Date | null, idx: number) => {
    const { month, year, selectedDay } = this.state

    const dayType =
      (day === null && DayTypes.dummy) ||
      (!!topDeals.find(topDeal => this.isSameDay(topDeal, day)) && DayTypes.topDeal) ||
      (!!lastMinuteDeals.find(lastMinuteDeal => this.isSameDay(lastMinuteDeal, day)) && DayTypes.lastMinuteDeal) ||
      (!!soldOuts.find(soldOut => this.isSameDay(soldOut, day)) && DayTypes.soldOut)

    const selected = selectedDay === idx

    return (
      <li
        data-day-type={selected || dayType}
        className={styles.day}
        key={`${year}-${month}-day-${idx}`}
        data-idx={idx}
        onClick={this.handleSelectDay}
      >
        {day && (
          <>
            {(dayType === DayTypes.topDeal || dayType === DayTypes.soldOut || dayType === DayTypes.lastMinuteDeal) && (
              <Sticker className={styles.sticker} variant={dayType} />
            )}
            <p className={styles.date}>
              {day.getDate()}
              <span>{this.monthsShort[month]}</span>
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
              <CalendarButton className={styles.button} theme={selected ? 'selected' : 'select'}>{`Select${
                selected ? 'ed' : ''
              }`}</CalendarButton>
            )}
          </>
        )}
      </li>
    )
  }

  renderHeader = () => {
    return [...Array(7).keys()].map(dayOfWeek => (
      <li className={styles.header} key={dayOfWeek}>
        {this.daysLong[dayOfWeek]}
      </li>
    ))
  }

  renderNavigation = () => {
    const { month: currentMonth, year: currentYear, monthsToRender } = this.state
    return [...Array(monthsToRender).keys()].map(offsetMonth => {
      const { year, month } = this.shiftByMonths(offsetMonth)
      const active = year === currentYear && month === currentMonth
      return (
        <li key={`${year}-${month}`} data-active={active} data-offset={offsetMonth} onClick={this.handleClickMonth}>
          {this.monthsLong[month]} {year}
        </li>
      )
    })
  }

  render() {
    const { month, year, selectedDay, isOpenSmallCalendar, value } = this.state
    const { navAnchor, className } = this.props

    return (
      <div className={classNames(styles.bookingCalendar, className)}>
        <div className={styles.anchor} ref={navAnchor} />
        <h3>Booking calendar</h3>
        <Select
          open={isOpenSmallCalendar}
          onClick={this.handleClickSelect}
          onClickOutside={this.handleCloseSelect}
          className={styles.select}
          placeholder={`${this.monthsLong[value ? value.getMonth() : month]} ${value ? value.getFullYear() : year}`}
          theme="orange"
          size="no"
          arrowPos="right"
        >
          <Calendar minDate={this.now} value={value} onChange={this.handleChangeSmallCalendar} />
        </Select>
        <div className={styles.navigation}>
          <i className="fas fa-chevron-left" onClick={this.scrollLeft} />
          <ul ref={this.navigation} onScroll={this.handleNavScroll} className={styles.navigation}>
            {this.renderNavigation()}
          </ul>
          <i className="fas fa-chevron-right" onClick={this.scrollRight} />
        </div>
        <ul className={styles.calendarBody}>
          {this.renderHeader()}
          {this.days.map(this.renderDay)}
          <li className={styles.dayDetails} data-week={Math.ceil((selectedDay + 1) / 7)}>
            <div ref={this.bookingDetailsAnchor} className={styles.bookingDetailsAnchor} />
            <BookingDetails onClose={this.handleCloseBookingDetails} />
          </li>
        </ul>
      </div>
    )
  }
}
