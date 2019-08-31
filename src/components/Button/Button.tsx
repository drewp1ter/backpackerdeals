import * as React from 'react'

import classNames from 'classnames'

import styles from './Button.module.scss'

export interface IProps {
  readonly children?: React.ReactNode
  readonly className?: string
  readonly disabled?: boolean
  readonly onClick?: () => void
  readonly form?: 'rectangled' | 'rounded' | 'circle' | 'standart'
  readonly size?: 'sm' | 'md' | 'lg' | 'xl'
  readonly theme?: 'orange' | 'transparentBorderWhite' | 'transparentBorderOrange' | 'transparent' | 'standart'
}

export const Button: React.FC<IProps> = ({
  className = '',
  children,
  onClick,
  disabled = false,
  form = 'rounded',
  theme = 'orange',
  size
}) => {
  return (
    <button
      aria-label="button"
      className={classNames(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
      data-form={form}
      data-theme={theme}
      data-size={size}
    >
      {children}
    </button>
  )
}
