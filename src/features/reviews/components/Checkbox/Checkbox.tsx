import classNames from 'classnames'
import React from 'react'

import styles from './Checkbox.module.scss'

interface IProps {
  readonly placeholder?: string
  readonly checked?: number | boolean
  readonly onClick?: (value?: number) => void
  readonly className?: string
  readonly value?: number
}

export const Checkbox: React.FC<IProps> = ({ placeholder, checked, onClick, className, value }) => {

  const handleClick = () => onClick && onClick(value)

  return (
    <div className={classNames(styles.checkbox, className)} data-checked={!!checked} onClick={handleClick}>
      {placeholder}
    </div>
  )
}
