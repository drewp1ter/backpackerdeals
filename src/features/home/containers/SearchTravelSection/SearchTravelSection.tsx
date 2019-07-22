import * as React from 'react'

import { HeaderWave } from 'components'
import { ISearchState, SearchActions } from 'features/find'
import { BasicSearchTravel } from '..'
import { AdvancedSearchTravelInput } from '../../components'

import styles from './SearchTravelSection.module.scss'

export const SearchTravelSection: React.FC<Partial<SearchActions> & Partial<ISearchState>> = ({ openSearch, searchType }) => {
  const [advancedSearch, toggleSearch] = React.useState<boolean>(false)

  const handleToggleSeach = () => toggleSearch(!advancedSearch)

  return (
    <HeaderWave className={styles.searchTravelSection} maskClassName={styles.mask}>
      <>
        <h1>
          Search Less,
          <br /> Travel More!
        </h1>
        <h2>
          Great experience at <br /> backpacker prices
        </h2>
        {advancedSearch ? (
          <AdvancedSearchTravelInput />
        ) : (
          <BasicSearchTravel />
        )}
        <div className={styles.searchImage} onClick={handleToggleSeach}>
          <i className={`fas ${advancedSearch ? 'fa-search' : 'fa-filter'}`} />
          {`${advancedSearch ? 'Basic' : 'Advanced'} search`}
        </div>
        <div onClick={openSearch} className={styles.mobileInput}>
          <div>
            <i className="fas fa-search" />
            <span>Search</span>
          </div>
          <div>
            <span>{searchType === 'basic' ? 'Basic search' : 'Advanced search'}</span>
            <i className="fas fa-filter" />
          </div>
        </div>
      </>
    </HeaderWave>
  )
}
