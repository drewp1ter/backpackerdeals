import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './MobileSelectMenu.module.scss'

interface IProps {
  readonly children: React.ReactNode
  readonly title: string
  readonly leftIcon?: string
  readonly rightIcon?: string
  readonly reversableIcon?: string
  readonly reverseType?: string
  readonly openerClass?: string
}

export const MobileSelectMenu: React.FC<IProps> = ({ title, leftIcon, rightIcon, reversableIcon, reverseType, children, openerClass }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.mobileSelectMenu}>
      <div className={classNames(styles.opener, openerClass, isOpen && styles.opened)} onClick={toggle}>
        <div>
          {leftIcon && <i className={leftIcon} data-reversable={reversableIcon === "left"} data-reversetype={reverseType} />}
          <span>{title}</span>
        </div>
        {rightIcon && <i className={rightIcon} data-reversable={reversableIcon === "right"} data-reversetype={reverseType} />}
      </div>

      {isOpen && (
        <div className={styles.menu}>
          {children}
        </div>
      )}
    </div>
  )
}
