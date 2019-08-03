import React from 'react'

import { CalendarBase } from '../CalendarBase'
import styles from './NewCalendar.module.scss'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export interface IProps {
  readonly className?: string
}

export class NewCalendar extends CalendarBase<IProps, {}> {
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

  renderDay = (day: Date | null, idx: number) => {
    const { month, year } = this.state
    return (
      <li data-empty={!day} key={`${year}-${month}-day-${idx}`}>
        {day && day.getDate()}
      </li>
    )
  }

  renderHeader = () => {
    return [...Array(7).keys()].map(dayOfWeek => <li key={dayOfWeek}>{DAYS_SHORT[dayOfWeek]}</li>)
  }

  render() {
    const { month, year } = this.state

    return (
      <div className={styles.calendar}>
        <div className={styles.navigation}>
          <i className="fas fa-chevron-left" onClick={this.previousMonth} />
          <div>
            {MONTHS[month]} {year}
          </div>
          <i className="fas fa-chevron-right" onClick={this.nextMonth} />
        </div>
        <ul className={styles.header}>{this.renderHeader()}</ul>
        <ul className={styles.days}>{this.days.map(this.renderDay)}</ul>
      </div>
    )
  }
}
