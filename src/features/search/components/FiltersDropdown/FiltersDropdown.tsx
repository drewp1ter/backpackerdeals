import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './FiltersDropdown.module.scss'

interface IProps {
  readonly title: string
  readonly children?: React.ReactNode
  readonly className?: string
}

export const FiltersDropdown: React.FC<IProps> = ({ title, children, className }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => setOpen(!isOpen)

  return (
    <div className={classNames(styles.filtersDropdown, className)}>
      <div className={styles.dropdown} onClick={toggleOpen} data-open={isOpen}>
        <span>{title}</span>
        <i className="fas fa-chevron-right"/>
      </div>

      {isOpen && children}
    </div>
  )
}
