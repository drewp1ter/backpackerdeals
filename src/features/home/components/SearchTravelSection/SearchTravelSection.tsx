import * as React from 'react'

import { HeaderWave } from 'components'
import { Actions as PageActions, IPageState } from 'features/page'
import { AdvancedSearchTravelInput, SearchTravelInput } from '..'

import styles from './SearchTravelSection.module.scss'

export const SearchTravelSection: React.FC<Partial<PageActions> & Partial<IPageState>> = ({ openSearch, searchType }) => {
  const [advancedSearch, toggleSearch] = React.useState<boolean>(false)
  const handleToggleSeach = () => toggleSearch(!advancedSearch)

  return (
    <HeaderWave className={styles.searchTravelSection}>
      <h1 key="e1">Search Less,<br/> Travel More!</h1>
      <h2 key="e2">Great experience at <br/> backpacker prices</h2>
      {advancedSearch ? (
        <AdvancedSearchTravelInput key="e3" toggleSearch={handleToggleSeach} />
      ) : (
        <SearchTravelInput key="e4" toggleSearch={handleToggleSeach} />
      )}
      <div onClick={openSearch} className={styles.mobileInput}>
        <div>
          <i className="fas fa-search" />
          <span>Search</span>
        </div>
        <div>
          <span>{ searchType === "basic" ? "Basic search" : "Advanced search" }</span>
          <i className="fas fa-filter" />
        </div>
      </div>
    </HeaderWave>
  )
}
