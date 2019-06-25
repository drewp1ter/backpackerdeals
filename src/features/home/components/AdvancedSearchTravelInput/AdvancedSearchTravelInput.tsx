import * as React from 'react'

import { OrangeButton, Calendar } from 'components'

import { SearchSelect } from 'features/search/components'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'

import styles from './AdvancedSearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch?: () => void
}

export const AdvancedSearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => (
  <div className={styles.advancedSearchTravelInput}>
    <div className={styles.searchBlock}>
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Start location"
        options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      />
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Type of tour"
        options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      />
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="End location"
        options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      />
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Select date"
        // options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      >
        <Calendar />
      </SearchSelect>
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Number of days"
        options={numberOfDays}
        handleSelect={option => console.log(option)}
        theme="light"
      />
    </div>
    <OrangeButton>SEARCH</OrangeButton>
    <div className={styles.searchImage} onClick={toggleSearch}>
      <i className="fas fa-search" />
      Basic Search
    </div>
  </div>
)
