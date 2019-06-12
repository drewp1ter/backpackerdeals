import * as React from 'react'

import { OrangeButton, SearchSelect } from 'components'

import styles from './AdvancedSearch.module.scss'

import Logo from 'features/page/components/Header/assets/blackLogo.svg'

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

export const AdvancedSearch: React.FC = () => {
  const [isOpen, toggleSearch] = React.useState(false)

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => console.log(event.currentTarget.dataset.value)

  return (
    <div className={styles.advancedSearch}>
      <div onClick={() => toggleSearch(true)} className={styles.searchPlaceholder}>
        <input type="text" disabled={true} placeholder="Try Australia" />
        <OrangeButton theme="small">
          <i className="fas fa-search" />
        </OrangeButton>
      </div>
      <div className={styles.searchMenu} data-opened={isOpen && 'opened'}>
        <img src={Logo} alt="Logo" className="logo" />
        <div className={styles.searchField}>
          <SearchSelect
            className={styles.firstSelect}
            selectedOption="Start Location"
            options={startLocation}
            handleSelect={handleSelect}
            theme="dark"
          />
          <SearchSelect selectedOption="Type of tour" options={startLocation} handleSelect={handleSelect} theme="dark" />
          <SearchSelect selectedOption="End Location" disabled={true} options={startLocation} handleSelect={handleSelect} theme="dark" />
          <SearchSelect selectedOption="Select date" options={startLocation} handleSelect={handleSelect} theme="dark" />
          <SearchSelect
            className={styles.lastSelect}
            selectedOption="Number of days"
            disabled={true}
            options={startLocation}
            handleSelect={handleSelect}
            theme="dark"
          />
          <OrangeButton theme="rectangled">SEARCH</OrangeButton>
        </div>
        <button aria-label="search" onClick={() => toggleSearch(false)}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  )
}
