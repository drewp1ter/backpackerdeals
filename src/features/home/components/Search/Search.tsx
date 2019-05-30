import * as React from 'react'
import classNames from 'classnames'

import { Input, OrangeButton } from 'components/base'
import styles from './Search.module.scss'

export interface IProps {
  className?: string
}

export const Search: React.FC<IProps> = ({ className }) => (
  <div className={classNames(styles.root, className)}>
    <h1>Search Less, Travel More!</h1>
    <span>Great experience at backpacker prices</span>
    <Input className={styles.input} placeholder="Search for a destination, activity or tour" theme="email" size="md">
      <OrangeButton className="rounded">SEARCH</OrangeButton>
    </Input>
  </div>
)
