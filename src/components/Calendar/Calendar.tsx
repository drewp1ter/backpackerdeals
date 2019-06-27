import React, { useState } from 'react'
import Datepicker from 'react-calendar/dist/entry.nostyle'

import './Calendar.scss'

export const Calendar: React.FC = () => {
  const [date, changeDate] = useState(new Date())

  const handleDateChange = (date: Date | Date[]) => changeDate(date as Date)

  return (
    <Datepicker
      value={date}
      locale="en"
      showNeighboringMonth={false}
      onChange={handleDateChange}
    />
  )
}