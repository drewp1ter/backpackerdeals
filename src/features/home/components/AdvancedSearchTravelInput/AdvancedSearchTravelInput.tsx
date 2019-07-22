import moment from 'moment'
import { useState } from 'react'
import * as React from 'react'

import { Button } from 'components'

import { Select } from 'components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

export const AdvancedSearchTravelInput: React.FC = () => {
  const [selected, setSelected] = useState({
    startLocation: 'Start location',
    typeOfTour: 'Type of tour',
    endLocation: 'End location',
    date: new Date(),
    numberOfDays: 'Number of days',
  })

  const handleChange = (value: any, key: string) => setSelected({ ...selected, [key]: value })

  const handleChangeDate = (value: Date) => handleChange(value, 'date')

  const dateFormatFn = (value: Date) => moment(value).format('DD/MM/YYYY')

  return (
    <div className={styles.advancedSearchTravelInput}>
      <div className={styles.searchBlock}>
        <Select
          className={styles.lastSelect}
          selectedOption={selected.startLocation}
          options={startLocation}
          onChange={value => handleChange(value, 'startLocation')}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption={selected.typeOfTour}
          options={startLocation}
          onChange={value => handleChange(value, 'typeOfTour')}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption={selected.endLocation}
          options={startLocation}
          onChange={value => handleChange(value, 'endLocation')}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption={selected.date}
          format={dateFormatFn}
          onChange={handleChangeDate}
          type="calendar"
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption={selected.numberOfDays}
          options={numberOfDays}
          onChange={value => handleChange(value, 'numberOfDays')}
          theme="light"
        />
      </div>
      <Button theme="orange" className={styles.searchBtn}>SEARCH</Button>
    </div>
  )
}
