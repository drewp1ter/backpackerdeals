import classNames from 'classnames'
import React, { useState } from 'react'

import { Button, Calendar, Select } from 'components'
import styles from './AdvancedSearchTravel.module.scss'
import { numberOfDays, startLocation } from './data'

enum Theme {
  home = 'home',
  header = 'header',
  menu = 'menu',
}

export interface IProps {
  readonly theme: keyof typeof Theme
  readonly className?: string
}

export interface IState {
  readonly startLocation: string
  readonly typeOfTour: string
  readonly endLocation: string
  readonly date: Date | undefined
  readonly numberOfDays: string
}

export const AdvancedSearchTravel: React.FC<IProps> = ({ theme, className }) => {
  const initialState: IState = {
    startLocation: '',
    typeOfTour: '',
    endLocation: '',
    date: undefined,
    numberOfDays: '',
  }
  const [state, setState] = useState<IState>(initialState)
  const handleChange = (value: any, key: string) => setState({ ...state, [key]: value })
  const handleChangeDate = (value: Date) => handleChange(value, 'date')
  const handleClickReset = () => setState(initialState)
  const selectTheme = theme === Theme.header || theme === Theme.menu ? 'default' : 'light'

  return (
    <div data-theme={theme} className={classNames(styles.advancedSearchTravel, className)}>
      <div className={styles.searchBlock}>
        <Select
          placeholder="Start location"
          className={styles.lastSelect}
          value={state.startLocation}
          options={startLocation}
          name="startLocation"
          size={theme === Theme.menu ? 'lg' : 'md-font'}
          onChange={handleChange}
          theme={selectTheme}
        />
        {theme !== Theme.menu && (
          <Select
            placeholder="Type of tour"
            className={styles.lastSelect}
            value={state.typeOfTour}
            options={startLocation}
            name="typeOfTour"
            size="md-font"
            onChange={handleChange}
            theme={selectTheme}
          />
        )}
        <Select
          placeholder="End location"
          className={styles.lastSelect}
          value={state.endLocation}
          options={startLocation}
          name="endLocation"
          size={theme === Theme.menu ? 'lg' : 'md-font'}
          onChange={handleChange}
          theme={selectTheme}
        />
        <Select
          className={styles.lastSelect}
          placeholder="Select date"
          size={theme === Theme.menu ? 'lg' : 'md-font'}
          value={state.date && state.date.toLocaleDateString()}
          theme={selectTheme}
        >
          <Calendar className={styles.calendar} value={state.date || new Date()} onChange={handleChangeDate} />
        </Select>
        <Select
          placeholder="Number of days"
          className={styles.numberOfDays}
          value={state.numberOfDays}
          options={numberOfDays}
          name="numberOfDays"
          size={theme === Theme.menu ? 'lg' : 'md-font'}
          onChange={handleChange}
          theme={selectTheme}
        />
      </div>
      <div className={styles.buttons}>
        <Button
          theme="orange"
          form={theme === Theme.header || theme === Theme.menu ? 'rectangled' : 'rounded'}
          className={styles.searchBtn}
          size="xl"
        >
          SEARCH
        </Button>
        {theme === Theme.menu && (
          <Button className={styles.resetButton} theme="transparent" form="standart" size="sm" onClick={handleClickReset}>
            Reset search
          </Button>
        )}
      </div>
    </div>
  )
}
