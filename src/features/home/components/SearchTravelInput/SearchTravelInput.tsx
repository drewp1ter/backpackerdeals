import * as React from 'react'

import { Autocomplete, Button } from 'components'

import styles from './SearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch: () => void
}

export const SearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => (
  <div className={styles.searchTravelInput}>
    <Autocomplete
      className={styles.autocomplete}
      placeholder="Search for a destination, activity or tour"
      suggestions={['Sydney', 'Sydney Fish Market Tour & Harbor Cruise - Half Day', 'Sydney Harbour Bridge Climb: Day Tour']}
      theme="roundedTransparent"
      size="ulg"
    >
      <Button className={styles.searchBtn} theme="orange" form="rounded" size="lg">
        SEARCH
      </Button>
    </Autocomplete>

    <div className={styles.imageBlock} onClick={toggleSearch}>
      <i className="fas fa-filter" />
      <span>Advanced search</span>
    </div>
  </div>
)
