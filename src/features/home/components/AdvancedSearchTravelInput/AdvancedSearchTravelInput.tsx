import * as React from 'react'

import { Button, Calendar } from 'components'

import { Select } from 'components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch?: () => void
}

export const AdvancedSearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => {

  const handleSelect = (option => console.log(option));

  return (
    <div className={styles.advancedSearchTravelInput}>
      <div className={styles.searchBlock}>
        <Select
          className={styles.lastSelect}
          selectedOption="Start location"
          options={startLocation}
          handleSelect={handleSelect}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption="Type of tour"
          options={startLocation}
          handleSelect={handleSelect}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption="End location"
          options={startLocation}
          handleSelect={handleSelect}
          theme="light"
        />
        <Select
          className={styles.lastSelect}
          selectedOption="Select date"
          // options={startLocation}
          handleSelect={handleSelect}
          theme="light"
        >
          <Calendar/>
        </Select>
        <Select
          className={styles.lastSelect}
          selectedOption="Number of days"
          options={numberOfDays}
          handleSelect={handleSelect}
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
