import moment from 'moment'
import { useState } from 'react'
import * as React from 'react'

import { Button } from 'components'

import { Calendar, NewSelect } from 'components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

export const AdvancedSearchTravelInput: React.FC = () => {
  const [state, setState] = useState({
    startLocation: '',
    typeOfTour: '',
    endLocation: '',
    date: undefined,
    numberOfDays: '',
  })

  const handleChange = (value: any, key: string) => setState({ ...state, [key]: value })

  const handleChangeDate = (value: Date) => handleChange(value, 'date')

  const dateFormatFn = () => state.date && moment(state.date).format('DD/MM/YYYY')

  return (
    <div className={styles.advancedSearchTravelInput}>
      <div className={styles.searchBlock}>
        <NewSelect
          placeholder="Start location"
          className={styles.lastSelect}
          value={state.startLocation}
          options={startLocation}
          name="startLocation"
          size="md-font"
          onChange={handleChange}
          theme="light"
        />
        <NewSelect
          placeholder="Type of tour"
          className={styles.lastSelect}
          value={state.typeOfTour}
          options={startLocation}
          name="typeOfTour"
          size="md-font"
          onChange={handleChange}
          theme="light"
        />
        <NewSelect
          placeholder="End location"
          className={styles.lastSelect}
          value={state.endLocation}
          options={startLocation}
          name="endLocation"
          size="md-font"
          onChange={handleChange}
          theme="light"
        />
        <NewSelect
          className={styles.lastSelect}
          placeholder="Select date"
          size="md-font"
          value={dateFormatFn()}
          theme="light"
        >
          <Calendar value={state.date || new Date()} onChange={handleChangeDate} />
        </NewSelect>
        <NewSelect
          placeholder="Number of days"
          className={styles.numberOfDays}
          value={state.numberOfDays}
          options={numberOfDays}
          name="numberOfDays"
          size="md-font"
          onChange={handleChange}
          theme="light"
        />
      </div>
      <Button theme="orange" className={styles.searchBtn}>SEARCH</Button>
    </div>
  )
}
