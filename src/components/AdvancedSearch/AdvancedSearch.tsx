import * as React from 'react'

import { Button, Calendar } from 'components'

import { Select } from 'components'
import styles from './AdvancedSearch.module.scss'
import { numberOfDays, startLocation } from './data'

import Logo from 'features/page/components/Header/assets/blackLogo.svg'


interface IProps {
  readonly theme?: string
}

export const AdvancedSearch: React.FC<IProps> = ({ theme }) => {
  const [isOpen, toggleSearch] = React.useState(false)

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => console.log(event.currentTarget.dataset.value)

  const handleClickSearch = () => toggleSearch(!isOpen)

  return (
    <div className={styles.advancedSearch}>
      <div data-theme={theme} onClick={handleClickSearch} className={styles.searchPlaceholder}>
        <input type="text" disabled={true} placeholder="Try Australia" />
        <span>
          <i className="fas fa-filter" />
          Advanced search
        </span>
        <Button form="circle" >
          <i className="fas fa-search" />
        </Button>
      </div>
      <div className={styles.searchMenu} data-opened={isOpen && 'opened'}>
        <img src={Logo} alt="Logo" className="logo" />
        <div className={styles.searchField}>
          <Select
            className={styles.firstSelect}
            selectedOption="Start Location"
            options={startLocation}
            handleSelect={handleSelect}
            theme="dark"
          />
          <Select selectedOption="Type of tour" options={startLocation} handleSelect={handleSelect} theme="dark" />
          <Select selectedOption="End Location" options={startLocation} handleSelect={handleSelect} theme="dark" />
          <Select selectedOption="Select date" handleSelect={handleSelect} theme="dark">
            <Calendar />
          </Select>
          <Select
            className={styles.lastSelect}
            selectedOption="Number of days"
            options={numberOfDays}
            handleSelect={handleSelect}
            theme="dark"
          />
          <Button className={styles.searchbutton} theme="orange" form="rectangled" size='lg'>SEARCH</Button>
        </div>
        <button aria-label="search" onClick={handleClickSearch}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  )
}
