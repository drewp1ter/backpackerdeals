import classNames from 'classnames'
import * as React from 'react'

import styles from './Input.module.scss'

export interface IProps {
  readonly onChange?: () => void
  readonly value?: string
  readonly placeholder?: string
  readonly label?: string
  readonly type?: 'text' | 'email' | 'password' | 'file'
  readonly className?: string
  readonly theme?: 'transparent' | 'standart'
  readonly size?: 'md'
  readonly labelID?: string
}

export const Input: React.FC<IProps> = ({ type = 'text', onChange, label, value, placeholder, className, theme = 'standart', size = 'md', labelID = '' }) => {
  if (label && !labelID) {
    labelID = Math.random().toString()
  }
  return (
    <>
      {label && (
        <label htmlFor={labelID} data-size={size} className={styles.label} data-theme={theme}>
          {label}
        </label>
      )}
      <input
        id={labelID}
        type={type}
        className={classNames(styles.input, className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-theme={theme}
        data-size={size}
      />
    </>
  )
}
