import React from 'react'

export interface IState {
  readonly month: number
  readonly year: number
}

export interface IProps {
  readonly value?: Date
}

export class CalendarBase<IPropsP, IStateP> extends React.Component<IProps & IPropsP, IState & IStateP> {
  get days(): Array<Date | null> {
    const { month, year } = this.state
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const prevOffset = new Date(year, month, 0).getDay()
    const prevDummyDays = prevOffset < 7 ? this.getNullDays(prevOffset) : []
    return [...prevDummyDays, ...[...Array(daysInMonth).keys()].map(day => new Date(year, month, day + 1))]
  }

  get daysFillEndNulls(): Array<Date | null> {
    const { month, year } = this.state
    const postOffset = new Date(year, month + 1, 0).getDay()
    const postDummyDays = postOffset > 0 ? this.getNullDays(7 - postOffset) : []
    return [...this.days, ...postDummyDays]
  }

  public nowYear: number
  public nowMonth: number
  public monthsLong: string[]
  public monthsShort: string[]
  public daysLong: string[]
  public daysShort: string[]
  public now: Date

  constructor(props: IProps & IPropsP) {
    super(props)
    this.now = new Date()
    this.nowMonth = (props.value && props.value.getMonth()) || this.now.getMonth()
    this.nowYear = (props.value && props.value.getFullYear()) || this.now.getFullYear()

    this.state = {
      ...this.state,
      month: this.nowMonth,
      year: this.nowYear,
      isUSStandart: false,
    }

    this.monthsLong = [
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
    this.monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    this.daysLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    this.daysShort = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
  }

  isSameDay = (a: Date | null | undefined, b: Date | null | undefined) =>
    !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  private getNullDays = (count: number) => [...Array(count).keys()].map(_day => null)
}
