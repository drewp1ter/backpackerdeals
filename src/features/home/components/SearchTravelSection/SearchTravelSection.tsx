import * as React from 'react'

import { HeaderWave } from 'components'
import { AdvancedSearchTravelInput, SearchTravelInput } from '..'

import styles from './SearchTravelSection.module.scss'

export const SearchTravelSection: React.FC = () => {
  const [advancedSearch, toggleSearch] = React.useState<boolean>(false)
  const handleToggleSeach = () => toggleSearch(!advancedSearch)

  return (
    <HeaderWave className={styles.searchTravelSection}>
      <h1 key="e1">Search Less, Travel More</h1>
      <h2 key="e2">Great experience at backpacker prices</h2>
      {advancedSearch ? (
        <AdvancedSearchTravelInput key="e3" toggleSearch={handleToggleSeach} />
      ) : (
        <SearchTravelInput key="e4" toggleSearch={handleToggleSeach} />
      )}
    </HeaderWave>
  )
}
