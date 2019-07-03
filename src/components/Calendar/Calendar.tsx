import React, { useState } from 'react'
import Datepicker from 'react-calendar/dist/entry.nostyle'

import './Calendar.scss'

interface IProps {
  date?: Date,
  onChange?: (value: Date) => void
}

export const Calendar: React.FC<IProps> = ({date, onChange}) => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date())

  const handleDateChange = (date: Date | Date[]) => {
    setSelectedDate(date)
    onChange && onChange(date as Date)
  }

  return (
    <Datepicker
      value={date || selectedDate}
      locale="en"
      showNeighboringMonth={false}
      onChange={handleDateChange}
    />
  )
}
