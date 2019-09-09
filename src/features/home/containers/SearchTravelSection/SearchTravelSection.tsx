import classNames from 'classnames'
import React from 'react'

import { HeaderWave } from 'components'
import { AdvancedSearchTravel } from 'components'
import { ISearchActions, ISearchState } from 'features/search'
import { BasicSearchTravel } from '..'
import styles from './SearchTravelSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const SearchTravelSection: React.FC<Partial<ISearchActions> & Partial<ISearchState> & IProps> = ({ openSearch, searchType, className }) => {
  const [advancedSearch, toggleSearch] = React.useState<boolean>(false)

  const handleToggleSeach = () => toggleSearch(!advancedSearch)

  return (
    <HeaderWave className={classNames(styles.searchTravelSection, className)} maskClassName={styles.mask}>
      <>
        <h1>
          Search Less,
          <br /> Travel More!
        </h1>
        <h2>
          Great experience at <br /> backpacker prices
        </h2>
        {advancedSearch ? (
          <AdvancedSearchTravel theme="home" className={styles.advancedSearchTravel} />
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
