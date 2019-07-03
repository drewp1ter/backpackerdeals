import moment from 'moment'
import { useState } from 'react'
import * as React from 'react'

import { Button, Calendar } from 'components'

import { Select } from 'components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch?: () => void
}

export const AdvancedSearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => {
  const [selected, setSelected] = useState({
    startLocation: 'Start location',
    typeOfTour: 'Type of tour',
    endLocation: 'End location',
    date: new Date(),
    numberOfDays: 'Number of days',
  })

  const handleChange = (value: any, key: string) => setSelected({ ...selected, [key]: value })

  const handleChangeDate = (value: Date) => handleChange(value, 'date')

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
          selectedOption={moment(selected.date).format('DD/MM/YYYY')}
          theme="light"
        >
          <Calendar date={selected.date} onChange={handleChangeDate}/>
        </Select>
        <Select
          className={styles.lastSelect}
          selectedOption={selected.numberOfDays}
          options={numberOfDays}
          onChange={value => handleChange(value, 'numberOfDays')}
          theme="light"
        />
      </div>
      <Button theme="orange" className={styles.searchBtn}>SEARCH</Button>
      <div className={styles.searchImage} onClick={toggleSearch}>
        <i className="fas fa-search"/>
        Basic Search
      </div>
    </div>
  )
}
