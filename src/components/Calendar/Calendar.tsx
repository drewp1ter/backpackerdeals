import classNames from 'classnames'
import React from 'react'

import { CalendarBase } from '../CalendarBase'
import styles from './Calendar.module.scss'

export interface IProps {
  readonly className?: string
  readonly onChange?: (value: Date, dayid?: number) => void
  readonly value?: Date
  readonly minDate?: Date
  readonly disablePast?: boolean
}

export interface IState {
  readonly isMonthsView: boolean
}

export class Calendar extends CalendarBase<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      ...this.state,
      isMonthsView: false,
    }
  }

  handleClickPrev = () => {
    const { month, year, isMonthsView } = this.state
    const { minDate } = this.props
    const current = new Date(year, month, 1).getTime()
    if (minDate && current <= minDate.getTime()) {
      return
    }
    if (isMonthsView) {
      this.setState({ year: year - 1 })
    } else {
      this.setState({
        month: month !== 0 ? month - 1 : 11,
        year: month !== 0 ? year : year - 1,
      })
    }
  }

  handleClickNext = () => {
    const { month, year, isMonthsView } = this.state
    if (isMonthsView) {
      this.setState({ year: year + 1 })
    } else {
      this.setState({
        month: month !== 11 ? month + 1 : 0,
        year: month !== 11 ? year : year + 1,
      })
    }
  }

  handleClickMonth = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const month = Number(currentTarget.dataset.idx)
    this.setState({ isMonthsView: false, month })
  }

  handleClickDay = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    const dayid = Number(currentTarget.dataset.dayid)
    const day = this.daysFillEndNulls[dayid]
    const { onChange, disablePast } = this.props
    if (disablePast && day && day.getTime() < this.now.getTime()) {
      return
    }
    if (day) {
      this.setState({ year: day.getFullYear(), month: day.getMonth() })
      onChange && onChange(day, dayid)
    }
  }

  handleToggleMonthsView = () => this.setState(prev => ({ ...prev, isMonthsView: !prev.isMonthsView }))

  renderDay = (day: Date | null, idx: number) => {
    const { month, year } = this.state
    const { value, disablePast } = this.props
    const disabled = disablePast && day && day.getTime() < this.now.getTime() - 86400000
    return (
      <li
        data-style={(!day && 'empty') || (this.isSameDay(value, day) && 'active') || (disabled && 'disabled')}
        key={`${year}-${month}-day-${idx}`}
        data-dayid={idx}
        onClick={this.handleClickDay}
      >
        <div>{day && day.getDate()}</div>
      </li>
    )
  }

  renderHeader = () => {
    return [...Array(7).keys()].map(dayOfWeek => (
      <li key={dayOfWeek}>
        <abbr title={this.daysLong[dayOfWeek]}>{this.daysShort[dayOfWeek]}</abbr>
      </li>
    ))
  }

  render() {
    const { month, year, isMonthsView } = this.state
    const { className } = this.props

    return (
      <div className={classNames(styles.calendar, className)}>
        <div className={styles.navigation}>
          <i className="fas fa-chevron-left" onClick={this.handleClickPrev} />
          <div onClick={this.handleToggleMonthsView}>
            {!isMonthsView && this.monthsLong[month]} {year}
          </div>
          <i className="fas fa-chevron-right" onClick={this.handleClickNext} />
        </div>
        {isMonthsView ? (
          <ul className={styles.months}>
            {this.monthsLong.map((month, idx) => (
              <li onClick={this.handleClickMonth} data-idx={idx} key={idx}>
                {month}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <ul className={styles.header}>{this.renderHeader()}</ul>
            <ul className={styles.days}>{this.daysFillEndNulls.map(this.renderDay)}</ul>
          </>
        )}
      </div>
    )
  }
}
