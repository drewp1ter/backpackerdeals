import React, { useState } from 'react'

import styles from './FiltersDropdown.module.scss'

interface IProps {
  readonly title: string
  readonly children?: React.ReactNode
}

export const FiltersDropdown: React.FC<IProps> = ({ title, children }) => {
  const [isOpen, toggleDropdown] = useState(false)

  return (
    <div className={styles.filtersDropdown}>
      <div className={styles.dropdown} onClick={() => toggleDropdown(!isOpen)} data-open={isOpen}>
        <span>{title}</span>
        <i className="fas fa-chevron-right"/>
      </div>

      {isOpen && children}
    </div>
  )
}
