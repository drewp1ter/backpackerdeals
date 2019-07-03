import { useState } from 'react'
import * as React from 'react'

import { Button } from 'components'

import { Select } from 'components'
import moment from 'moment'
import styles from './AdvancedSearch.module.scss'
import { numberOfDays, startLocation } from './data'

import Logo from 'features/page/components/Header/assets/blackLogo.svg'


interface IProps {
  readonly theme?: string
}

export const AdvancedSearch: React.FC<IProps> = ({ theme }) => {
  const [isOpen, toggleSearch] = React.useState(false)
  const [selected, setSelected] = useState({
    startLocation: 'Start location',
    typeOfTour: 'Type of tour',
    endLocation: 'End location',
    date: new Date(),
    numberOfDays: 'Number of days',
  })

  const handleChange = (value: any, key: string) => setSelected({ ...selected, [key]: value })

  const handleChangeDate = (value: Date) => handleChange(value, 'date')

  const handleClickSearch = () => toggleSearch(!isOpen)

  const dateFormatFn = (date: Date) => moment(date).format('DD/MM/YYYY')

  return (
    <div className={styles.advancedSearch}>
      <div data-theme={theme} className={styles.searchPlaceholder}>
        <input type="text" placeholder="Try Australia"/>
        <span onClick={handleClickSearch}>
          <i className="fas fa-filter"/>
          Advanced search
        </span>
        <Button form="circle">
          <i className="fas fa-search"/>
        </Button>
      </div>
      <div className={styles.searchMenu} data-opened={isOpen && 'opened'}>
        <img src={Logo} alt="Logo" className="logo"/>
        <div className={styles.searchField}>
          <Select
            className={styles.firstSelect}
            selectedOption={selected.startLocation}
            options={startLocation}
            onChange={value => handleChange(value, 'startLocation')}
            theme="dark"
          />
          <Select selectedOption={selected.typeOfTour}
                  options={startLocation}
                  onChange={value => handleChange(value, 'typeOfTour')}
                  theme="dark"/>
          <Select selectedOption={selected.endLocation}
                  options={startLocation}
                  onChange={value => handleChange(value, 'endLocation')}
                  theme="dark"/>
          <Select selectedOption={selected.date}
                  format={dateFormatFn}
                  onChange={handleChangeDate}
                  type="calendar"
                  theme="dark" />
          <Select
            className={styles.lastSelect}
            selectedOption={selected.numberOfDays}
            options={numberOfDays}
            onChange={value => handleChange(value, 'numberOfDays')}
            theme="dark"
          />
          <Button className={styles.searchbutton} theme="orange" form="rectangled" size='lg'>SEARCH</Button>
        </div>
        <button aria-label="search" onClick={handleClickSearch}>
          <i className="fas fa-times"/>
        </button>
      </div>
    </div>
  )
}
