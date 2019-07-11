import moment from 'moment'
import React, { useState } from 'react'
import Datepicker from 'react-calendar/dist/entry.nostyle'
import './Calendar.scss'

interface IProps {
  date?: Date,
  onChange?: (value: Date) => void
}

export const Calendar: React.FC<IProps> = ({ date, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date())

  const emitOnChange = (newDate: Date) => {
    setSelectedDate(newDate)
    onChange && onChange(newDate)
  }

  const handleDateChange = (newDate: Date | Date[]) => {
    emitOnChange(newDate as Date)
  }

  const handleYearChange = (newDate: Date | Date[]) => {
    const parsedNewDate = moment(date as Date).year(moment(newDate as Date).year()).toDate()
    emitOnChange(parsedNewDate)
  }

  const handleMonthChange = (newDate: Date | Date[]) => {
    const parsedNewDate = moment(date as Date).month(moment(newDate as Date).month()).toDate()
    emitOnChange(parsedNewDate)
  }

  return (
    <Datepicker
      value={date || selectedDate}
      locale="en"
      minDetail="decade"
      showNeighboringMonth={false}
      onChange={handleDateChange}
      onClickYear={handleYearChange}
      onClickMonth={handleMonthChange}
    />
  )
}
