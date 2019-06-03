import * as React from 'react'

import classNames from 'classnames'

import styles from './OrangeButton.module.scss'

export interface IProps {
  readonly children?: React.ReactNode
  readonly className?: string
  readonly disabled?: boolean
  readonly onClick?: () => void
  readonly theme?: 'rounded' | 'rectangled' | 'small'
}

export const OrangeButton: React.FC<IProps> = ({ className = '', children, onClick, disabled = false, theme = 'rounded' }) => (
  <button className={classNames(styles.orangeButton, className)} disabled={disabled} onClick={onClick} data-theme={theme}>
    {children}
  </button>
)
