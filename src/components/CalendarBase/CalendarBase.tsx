import React from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export interface IState {
  readonly month: number
  readonly year: number
  readonly selectedDay: number
}

export class CalendarBase<IProps, IStateP> extends React.Component<IProps, IState & IStateP> {
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

  constructor(props: IProps) {
    super(props)
    const now = new Date()

    this.nowMonth = now.getMonth()
    this.nowYear = now.getFullYear()
    this.isUSStandart = now.toLocaleTimeString().search(/(AM|PM)/) !== -1

    this.state = {
      ...this.state,
      month: this.nowMonth,
      year: this.nowYear,
      selectedDay: -1,
    }
  }

  isSameDay = (a: Date | null, b: Date | null) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
