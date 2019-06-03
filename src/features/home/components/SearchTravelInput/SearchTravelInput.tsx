import * as React from 'react'

import { OrangeButton, Input } from 'components'

import styles from './SearchTravelInput.module.scss'

interface IProps {
  readonly toggleSearch: () => void
}

export const SearchTravelInput: React.FC<IProps> = ({ toggleSearch }) => (
  <div className={styles.searchTravelInput}>
    <Input className={styles.input} placeholder="Search for a destination, activity or tour" theme="search" size="md">
      <OrangeButton theme="rounded">SEARCH</OrangeButton>
    </Input>
    <div className={styles.imageBlock} onClick={toggleSearch}>
      <i className="fas fa-filter" />
      <span>Advanced search</span>
    </div>
  </div>
)
