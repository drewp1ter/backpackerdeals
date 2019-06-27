import * as React from 'react'

import { Button, Input } from 'components'

import styles from './SearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch: () => void
}

export const SearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => (
  <div className={styles.searchTravelInput}>
    <div className={styles.input}>
      <Input placeholder="Search for a destination, activity or tour" theme="transparent" size="md" />
      <Button theme="orange" form="rounded" size="lg">
        SEARCH
      </Button>
    </div>
    <div className={styles.imageBlock} onClick={toggleSearch}>
      <i className="fas fa-filter" />
      <span>Advanced search</span>
    </div>
  </div>
)
