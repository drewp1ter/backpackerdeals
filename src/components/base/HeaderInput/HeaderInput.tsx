import * as React from 'react'

import { OrangeButton, Input, Icon } from 'components/base'

import SearchIcon from './assets/Group 3.svg'

import styles from './HeaderInput.module.scss'

export const HeaderInput: React.FC = () => (
  <div className={styles.headerInput}>
    <Input className={styles.input} placeholder="Search for a destination, activity or tour" theme="search" size="md">
      <OrangeButton className="rounded">SEARCH</OrangeButton>
    </Input>
    <Icon name="group3" alt="Advanced search" />
  </div>
)
