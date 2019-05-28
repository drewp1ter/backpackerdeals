import * as React from 'react'

import classNames from 'classnames'
import styles from './OrangeButton.scss'

export interface IProps {
  readonly children?: React.ReactNode
  readonly className?: string
  readonly disabled?: boolean
  readonly onClick?: () => void
}

export const OrangeButton: React.FC<IProps> = ({
  className = '',
  children,
  onClick,
  disabled = false
}) => {
  const btnClass = classNames(styles.button, className)

  return (
    <button className={ btnClass } disabled={ disabled } onClick={ onClick } >
      { children }
    </button>
  )
}