import React, { Component } from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS_LONG = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

import './BookingCalendar.scss'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly date: number
  readonly month: number
  readonly today: Date
  readonly year: number
}

export class BookingCalendar extends Component<IProps, IState> {
  get days(): Array<Date | null> {
    const { month, year } = this.state
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const offset = new Date(year, month, 0).getDay();
    const dummyDays = offset < 7 ? [...Array(offset).keys()].map(_day => null) : []
    return [...dummyDays, ...[...Array(daysInMonth).keys()].map(day => new Date(year, month, day + 1))]
  }

  get weeks(): Array<Array<Date | null>> {
    const days = this.days
    const weekCount = Math.ceil(days.length / 7)
    return [...Array(weekCount).keys()].map(i => days.slice(i * 7, (i + 1) * 7))
  }

  static isSameDay(a: Date, b: Date) {
    return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  }

  constructor(props: IProps) {
    super(props)

    const now = new Date()

    this.state = {
      date: now.getDate(),
      month: now.getMonth(),
      today: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      year: now.getFullYear(),
    }
  }

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

  onDayClick = day => () => {
    if (day) {
      this.props.onDayClick(day)
    }
  }

  renderDay = (day: Date | null, index: number) => {
    const { month, today, year } = this.state
    const { active } = this.props

    const isToday = day && day.valueOf() === today.valueOf()
    const isActive = active && day && BookingCalendar.isSameDay(active, day)

    return (
      <td
        className={['day', isActive ? 'active' : null, !day ? 'empty' : null, isToday ? 'today' : null].filter(v => v).join(' ')}
        key={`${year}.${month}.day.${index}`}
        onClick={this.onDayClick(day)}
      >
        {day ? day.getDate() : ''}
      </td>
    )
  }

  renderWeek = (days: Array<Date | null>, index: number) => {
    const { month, year } = this.state
    return <tr key={`${year}.${month}.week.${index}`}>{days.map(this.renderDay)}</tr>
  }

  renderDayHeader = (dayOfWeek: number) => (
    <th scope="col">
      <abbr title={DAYS_LONG[dayOfWeek]}>{DAYS_SHORT[dayOfWeek]}</abbr>
    </th>
  )

  render() {
    const { month, year } = this.state

    return (
      <div className="react-daypicker-root">
        <div className="header">
          <div className="previous-month" onClick={this.previousMonth}>
            ◀
          </div>
          <div className="month-year">
            {MONTHS[month]} {year}
          </div>
          <div className="next-month" onClick={this.nextMonth}>
            ▶
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {this.renderDayHeader(0)}
              {this.renderDayHeader(1)}
              {this.renderDayHeader(2)}
              {this.renderDayHeader(3)}
              {this.renderDayHeader(4)}
              {this.renderDayHeader(5)}
              {this.renderDayHeader(6)}
            </tr>
          </thead>
          <tbody>{this.weeks.map(this.renderWeek)}</tbody>
        </table>
      </div>
    )
  }
}
