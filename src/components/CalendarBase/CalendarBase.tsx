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
    const getNullDays = (count: number) => [...Array(count).keys()].map(_day => null)
    const { month, year } = this.state
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const prevOffset = new Date(year, month, this.isUSStandart ? 1 : 0).getDay()
    const postOffset = new Date(year, month + 1, this.isUSStandart ? 1 : 0).getDay()
    const prevDummyDays = prevOffset < 7 ? getNullDays(prevOffset) : []
    const postDummyDays = postOffset > 0 ? getNullDays(7 - postOffset) : []
    return [...prevDummyDays, ...[...Array(daysInMonth).keys()].map(day => new Date(year, month, day + 1)), ...postDummyDays]
  }

  public nowYear: number
  public nowMonth: number
  public isUSStandart: boolean
  public monthsLong: string[]
  public monthsShort: string[]
  public daysLong: string[]
  public daysShort: string[]
  public now: Date

  constructor(props: IProps & IPropsP) {
    super(props)
    this.now = new Date()
    this.nowMonth = props.value && props.value.getMonth() || this.now.getMonth()
    this.nowYear = props.value && props.value.getFullYear() || this.now.getFullYear()
    this.isUSStandart = this.now.toLocaleTimeString().search(/(AM|PM)/) !== -1

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
    this.daysLong = this.isUSStandart
      ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    this.daysShort = this.isUSStandart ? ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    this.state = {
      ...this.state,
      month: this.nowMonth,
      year: this.nowYear,
    }
  }

  isSameDay = (a: Date | null | undefined, b: Date | null | undefined) =>
    !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
