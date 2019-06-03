import * as React from 'react'

import { SearchTravelInput, AdvancedSearchTravelInput } from '..'

import styles from './SearchTravelSection.module.scss'

export const SearchTravelSection: React.FC = () => {
  const [advancedSearch, toggleSearch] = React.useState(false)

  return (
    <section className={styles.searchTravelSection}>
      <h1>Search Less, Travel More</h1>
      <h2>Great experience at backpacker prices</h2>
      {advancedSearch ? (
        <AdvancedSearchTravelInput toggleSearch={() => toggleSearch(!advancedSearch)} />
      ) : (
        <SearchTravelInput toggleSearch={() => toggleSearch(!advancedSearch)} />
      )}
    </section>
  )
}
