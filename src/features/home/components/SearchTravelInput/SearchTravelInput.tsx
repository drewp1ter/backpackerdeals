import * as React from 'react'

import { OrangeButton, Input, Icon } from 'components/base'

import styles from './SearchTravelInput.module.scss'

export const SearchTravelInput: React.FC = () => (
  <div className={styles.searchTravelInput}>
    <Input className={styles.input} placeholder="Search for a destination, activity or tour" theme="search" size="md">
      <OrangeButton theme="rounded">SEARCH</OrangeButton>
    </Input>
    <Icon name="group3" alt="Advanced search" />
  </div>
)
