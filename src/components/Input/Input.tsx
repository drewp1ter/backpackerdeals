import classNames from 'classnames'
import * as React from 'react'

import styles from './Input.module.scss'

export interface IProps {
  readonly onChange?: () => void
  readonly value?: string
  readonly placeholder?: string
  readonly type?: 'text' | 'email' | 'password'
  readonly className?: string
  readonly theme?: 'search' | 'email'
  readonly size?: 'md'
  readonly children?: JSX.Element
}

export const Input: React.FC<IProps> = ({ type = 'text', onChange, value, placeholder, className, theme, size, children }) =>
  children ? (
    <div className={classNames(styles.root, className)} data-theme={theme} data-size={size}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} data-theme={theme} data-size={size} />
      {children}
    </div>
  ) : (
    <input
      type={type}
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-theme={theme}
      data-size={size}
    />
  )
