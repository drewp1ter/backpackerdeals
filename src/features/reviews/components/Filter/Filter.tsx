import classNames from 'classnames'
import React from 'react'

import { Select } from 'components'
import styles from './Filter.module.scss'

export interface IProps {
  readonly className?: string
}

export const Filter: React.FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles.filter, className)}>
      <Select className={styles.select} placeholder="Rating" options={['1', '2', '3', '4', '5']} />
    </div>
  )
}
