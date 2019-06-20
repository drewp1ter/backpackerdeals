import classNames from 'classnames'
import * as React from 'react'

import styles from './Input.module.scss'

export interface IProps {
  readonly onChange?: () => void
  readonly value?: string
  readonly placeholder?: string
  readonly label?: string
  readonly type?: 'text' | 'email' | 'password'
  readonly className?: string
  readonly inputClassName?: string
  readonly theme?: 'search' | 'email' | 'standart'
  readonly size?: 'md'
  readonly children?: JSX.Element
}

export const Input: React.FC<IProps> = ({
  type = 'text',
  onChange,
  label,
  value,
  placeholder,
  className,
  inputClassName,
  theme,
  size,
  children,
}) => {
  return children ? (
    <div className={classNames(styles.input, className)} data-theme={theme} data-size={size}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} data-theme={theme} data-size={size} />
      {children}
    </div>
  ) : (
    <div className={classNames(styles.input, className)}>
      {label && <label data-size={size}>{label}</label>}
      <input
        type={type}
        className={classNames(styles.inputEl, inputClassName)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-theme={theme}
        data-size={size}
      />
    </div>
  )
}
