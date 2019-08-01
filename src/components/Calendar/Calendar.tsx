import React, { useState } from 'react'
import Datepicker from 'react-calendar/dist/entry.nostyle'
import './Calendar.scss'

interface IProps {
  date?: Date,
  onChange?: (value: Date) => void
}


export const Calendar: React.FC<IProps> = ({ date, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date())

  const handleChange = (newDate: Date | Date[]) => {
    setSelectedDate(newDate)
    onChange && onChange(newDate as Date)
  }

  return (
    <Datepicker
      value={date || selectedDate}
      locale="en-US"
      showNeighboringMonth={false}
      onChange={handleChange}
    />
  )
}
