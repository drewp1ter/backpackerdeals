import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './MobileSelectMenu.module.scss'

interface IProps {
  readonly children: React.ReactNode
  readonly title?: string
  readonly leftIcon?: string
  readonly rightIcon?: string
  readonly reversableIcon?: string
  readonly reverseType?: string
  readonly openerClass?: string
  readonly childrenClassName?: string,
  readonly selected?: any,
  readonly onChange?: (value: any) => void
  readonly format?: (value: any) => string
}

export const MobileSelectMenu: React.FC<IProps> = ({
  title,
  leftIcon,
  rightIcon,
  reversableIcon,
  reverseType,
  children,
  openerClass,
  childrenClassName,
  selected,
  format
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggle = () => setIsOpen(!isOpen)

  const renderTitle = () => {
    let value = selected ? selected : title;
    value = format ? format(value) : value;
    return (<span>{value}</span>)
  }

  return (
    <div className={styles.mobileSelectMenu}>
      <div className={classNames(styles.opener, openerClass, isOpen && styles.opened)} onClick={toggle}>
        <div>
          {leftIcon && <i className={leftIcon} data-reversable={reversableIcon === 'left'} data-reversetype={reverseType} />}
          {renderTitle()}
        </div>
        {rightIcon && <i className={rightIcon} data-reversable={reversableIcon === 'right'} data-reversetype={reverseType} />}
      </div>

      {isOpen && (childrenClassName ? <div className={childrenClassName} onClick={toggle}>{children}</div> : children)}
    </div>
  )
}
