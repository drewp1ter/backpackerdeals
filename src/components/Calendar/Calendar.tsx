import classNames from 'classnames'
import React from 'react'

import { CalendarBase } from '../CalendarBase'
import styles from './Calendar.module.scss'

export interface IProps {
  readonly className?: string
  readonly onChange?: (value: Date) => void
  readonly value?: Date
  readonly minDate?: Date
}

export class Calendar extends CalendarBase<IProps, {}> {
  previousMonth = () => {
    const { month, year } = this.state
    const { minDate } = this.props
    year >= ((minDate && minDate.getFullYear()) || 0) &&
      month > ((minDate && minDate.getMonth()) || 0) &&
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
    const { value } = this.props
    return (
      <li
        data-empty={!day}
        data-active={this.isSameDay(value, day)}
        key={`${year}-${month}-day-${idx}`}
        data-dayid={idx}
        onClick={this.handleClickDay}
      >
        {day && day.getDate()}
      </li>
    )
  }

  handleClickDay = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const day = this.days[Number(currentTarget.dataset.dayid)]
    const { onChange } = this.props
    if (day) {
      this.setState({ year: day.getFullYear(), month: day.getMonth() })
      onChange && onChange(day)
    }
  }

  renderHeader = () => {
    return [...Array(7).keys()].map(dayOfWeek => (
      <li key={dayOfWeek}>
        <abbr title={this.daysLong[dayOfWeek]}>{this.daysShort[dayOfWeek]}</abbr>
      </li>
    ))
  }

  render() {
    const { month, year } = this.state
    const { className } = this.props

    return (
      <div className={classNames(styles.calendar, className)}>
        <div className={styles.navigation}>
          <i className="fas fa-chevron-left" onClick={this.previousMonth} />
          <div>
            {this.monthsLong[month]} {year}
          </div>
          <i className="fas fa-chevron-right" onClick={this.nextMonth} />
        </div>
        <ul className={styles.header}>{this.renderHeader()}</ul>
        <ul className={styles.days}>{this.days.map(this.renderDay)}</ul>
      </div>
    )
  }
}
