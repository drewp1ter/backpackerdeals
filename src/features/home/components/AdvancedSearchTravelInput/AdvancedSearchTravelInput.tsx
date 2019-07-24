import moment from 'moment'
import { useState } from 'react'
import * as React from 'react'

import { Button } from 'components'

import { Calendar, NewSelect } from 'components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

// export interface IState {
//   readonly startLocation: string
//   readonly typeOfTour: string
//   readonly endLocation: string
//   readonly date: Date | undefined
//   readonly numberOfDays: string
// }

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
          theme="theme1"
        />
        <NewSelect
          placeholder="Type of tour"
          className={styles.lastSelect}
          value={state.typeOfTour}
          options={startLocation}
          name="typeOfTour"
          size="md-font"
          onChange={handleChange}
          theme="theme1"
        />
        <NewSelect
          placeholder="End location"
          className={styles.lastSelect}
          value={state.endLocation}
          options={startLocation}
          name="endLocation"
          size="md-font"
          onChange={handleChange}
          theme="theme1"
        />
        <NewSelect
          className={styles.lastSelect}
          placeholder="Select date"
          size="md-font"
          value={dateFormatFn()}
          theme="theme1"
        >
          <Calendar date={state.date || new Date()} onChange={handleChangeDate} />
        </NewSelect>
        <NewSelect
          placeholder="Number of days"
          className={styles.lastSelect}
          value={state.numberOfDays}
          options={numberOfDays}
          name="numberOfDays"
          size="md-font"
          onChange={handleChange}
          theme="theme1"
        />
      </div>
      <Button theme="orange" className={styles.searchBtn}>SEARCH</Button>
    </div>
  )
}
