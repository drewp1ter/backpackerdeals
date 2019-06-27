import * as React from 'react'

import { Calendar, OrangeButton } from 'components'

import { SearchSelect } from 'features/search/components'
import styles from './AdvancedSearch.module.scss'
import { numberOfDays, startLocation } from './data'

import Logo from 'features/page/components/Header/assets/blackLogo.svg'

interface IProps {
  readonly theme?: string
}

export const AdvancedSearch: React.FC<IProps> = ({ theme }) => {
  const [isOpen, toggleSearch] = React.useState(false)

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => console.log(event.currentTarget.dataset.value)

  return (
    <div className={styles.advancedSearch}>
      <div data-theme={theme} onClick={() => toggleSearch(true)} className={styles.searchPlaceholder}>
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
          <SearchSelect selectedOption="End Location" options={startLocation} handleSelect={handleSelect} theme="dark" />
          <SearchSelect selectedOption="Select date" handleSelect={handleSelect} theme="dark">
            <Calendar />
          </SearchSelect>
          <SearchSelect
            className={styles.lastSelect}
            selectedOption="Number of days"
            options={numberOfDays}
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
