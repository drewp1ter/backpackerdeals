import React, { useState } from 'react'

import { AdvancedSearchTravel, Button, Input } from 'components'
import Logo from 'features/page/components/Header/assets/blackLogo.svg'
import styles from './AdvancedSearch.module.scss'


interface IProps {
  readonly theme?: string
}

export const AdvancedSearch: React.FC<IProps> = ({ theme }) => {
  const [isOpen, toggleSearch] = useState(false)
  const handleClickSearch = () => toggleSearch(!isOpen)

  return (
    <div className={styles.advancedSearch}>
      <div data-theme={theme} className={styles.searchPlaceholder}>
        <Input theme="transparent" placeholder="Try Australia" />
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
        <AdvancedSearchTravel className={styles.advancedSearchTravel} theme="header" />
        <button aria-label="search" onClick={handleClickSearch}>
          <i className="fas fa-times"/>
        </button>
      </div>
    </div>
  )
}
