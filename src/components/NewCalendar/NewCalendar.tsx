import React, { Component } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const DAYS_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly month: number
  readonly year: number
  readonly selectedDay: number
  readonly monthsToRender: number
}

export class NewCalendar extends Component<IProps, IState> {
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

  previousMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 0 ? month - 1 : 11,
      year: month !== 0 ? year : year - 1
    });
  };

  nextMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month !== 11 ? month + 1 : 0,
      year: month !== 11 ? year : year + 1
    });
  };

  onDayClick = day => () => {
    if (day) {
      this.props.onDayClick(day);
    }
  };

  renderDay = (day: Date | null, idx: number)=> {
    const { month, today, year } = this.state;
    const { active } = this.props;

    const isToday = day && day.valueOf() === today.valueOf();
    const isActive = active && day && DayPicker.isSameDay(active, day);

    return (
      <td
        className={[
          "day",
          isActive ? "active" : null,
          !day ? "empty" : null,
          isToday ? "today" : null
        ]
          .filter(v => v)
          .join(" ")}
        key={`${year}.${month}.day.${index}`}
        onClick={this.onDayClick(day)}
      >
        {day ? day.getDate() : ""}
      </td>
    );
  };

  renderWeek = (days, index) => {
    const { month, year } = this.state;

    return (
      <tr key={`${year}.${month}.week.${index}`}>{days.map(this.renderDay)}</tr>
    );
  };

  renderDayHeader(dayOfWeek) {
    return (
      <th scope="col">
        <abbr title={this.longDayName(dayOfWeek)}>
          {this.shortDayName(dayOfWeek)}
        </abbr>
      </th>
    );
  }

  render() {
    const { month, year } = this.state;

    return (
      <div className="react-daypicker-root">
        <div className="header">
          <div className="previous-month" onClick={this.previousMonth}>
            ◀
          </div>
          <div className="month-year">
            {this.longMonthName(month)} {year}
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
    );
  }
}
