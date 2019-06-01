import * as React from 'react'

import { OrangeButton, Input, Icon } from 'components'

import styles from './HeaderInput.module.scss'

export const HeaderInput: React.FC = () => (
  <div className={styles.headerInput}>
    <Input className={styles.input} placeholder="Search for a destination, activity or tour" theme="search" size="md">
      <OrangeButton theme="rounded">SEARCH</OrangeButton>
    </Input>
    <Icon name="group3" alt="Advanced search" />
  </div>
)
