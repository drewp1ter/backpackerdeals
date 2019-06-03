import * as React from 'react'

import { OrangeButton, SearchSelect } from 'components/base'

import styles from './AdvancedSearchTravelInput.module.scss'

const startLocation = [
  'Haven 5:20 AM',
  'Diplomat 5:20 AM',
  'Desert Rose AM',
  'Aurora Alice Spring 5:25 AM',
  'Todd Tavern 5:25 AM',
  'Double Tree Hilton 5:20 AM',
  'Jump Inn Hostel 5:20 AM',
  'Haven 5:20 AM',
  'Diplomat 5:20 AM',
  'Desert Rose AM',
  'Aurora Alice Spring 5:25 AM',
  'Todd Tavern 5:25 AM',
  'Double Tree Hilton 5:20 AM',
  'Jump Inn Hostel 5:20 AM',
]

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
        disabled={true}
        options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      />
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Select date"
        options={startLocation}
        handleSelect={option => console.log(option)}
        theme="light"
      />
      <SearchSelect
        className={styles.lastSelect}
        selectedOption="Number of days"
        disabled={true}
        options={startLocation}
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
