import moment from 'moment'
import React, { useState } from 'react'

import { Button } from 'components'

import { Calendar, NewSelect } from 'components'
import { numberOfDays, startLocation } from './data'

import styles from './AdvancedSearchTravel.module.scss'


export interface IProps {
  readonly forHeader?: boolean
}

export const AdvancedSearchTravel: React.FC<IProps> = ({ forHeader }) => {
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
  const selectTheme = forHeader ? 'default' : 'light'

  return (
    <div className={styles.advancedSearchTravel}>
      <div className={styles.searchBlock}>
        <NewSelect
          placeholder="Start location"
          className={styles.lastSelect}
          value={state.startLocation}
          options={startLocation}
          name="startLocation"
          size="md-font"
          onChange={handleChange}
          theme={selectTheme}
        />
        <NewSelect
          placeholder="Type of tour"
          className={styles.lastSelect}
          value={state.typeOfTour}
          options={startLocation}
          name="typeOfTour"
          size="md-font"
          onChange={handleChange}
          theme={selectTheme}
        />
        <NewSelect
          placeholder="End location"
          className={styles.lastSelect}
          value={state.endLocation}
          options={startLocation}
          name="endLocation"
          size="md-font"
          onChange={handleChange}
          theme={selectTheme}
        />
        <NewSelect
          className={styles.lastSelect}
          placeholder="Select date"
          size="md-font"
          value={dateFormatFn()}
          theme={selectTheme}
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
          theme={selectTheme}
        />
      </div>
      <Button theme="orange" form={forHeader ? 'rectangled' : 'rounded'} className={styles.searchBtn} size="lg">SEARCH</Button>
    </div>
  )
}
