import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './SelectMenu.module.scss'

interface IProps {
  readonly children: React.ReactNode
  readonly title: string
  readonly opener: React.ReactNode
  readonly size?: 'md' | 'lg'
  readonly pos?: 'right' | 'left'
  open?: boolean
}

export const SelectMenu: React.FC<IProps> = ({ open = false, title, opener, children, size = 'md', pos = 'right' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)
  const toggle = () => setIsOpen(!isOpen)
  const collapse = () => setIsOpen(false)

  return (
    <div className={styles.headerSelectMenu} tabIndex={0} onBlur={collapse}>
      <div className={classNames(styles.opener, isOpen && styles.opened)} onClick={toggle}>
        <span>{opener}</span>
        <i className="fas fa-chevron-down" />
      </div>

      {isOpen && (
        <div className={styles.menu} data-size={size} data-pos={pos}>
          <div className={styles.title}>
            <h6>{title}</h6>
            <i className="fas fa-times" onClick={collapse} />
          </div>
          {children}
        </div>
      )}
    </div>
  )
}
