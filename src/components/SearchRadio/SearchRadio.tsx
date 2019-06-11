import React from 'react'

import styles from './SearchRadio.module.scss'

interface IProps {
  readonly placeholder: string
  readonly selected: boolean
  readonly onClick: () => void
}
 
export const SearchRadio: React.FC<IProps> = ({ placeholder, selected, onClick }) => (
  <div className={styles.searchRadio} data-selected={selected} onClick={onClick}>
    <span>{placeholder}</span>
  </div>
)