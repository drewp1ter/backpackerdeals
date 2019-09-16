import classNames from 'classnames'
import React, { RefObject } from 'react'

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
  readonly children?: JSX.Element | JSX.Element[]
  readonly _ref?: RefObject<HTMLInputElement>
}

export const Input: React.FC<IProps> = ({
  type = 'text',
  onChange,
  label,
  value,
  placeholder,
  className,
  theme = 'standart',
  size = 'md',
  labelID,
  children,
  _ref,
}) => {
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
      {children ? (
        children
      ) : (
        <input
          ref={_ref}
          id={labelID}
          type={type}
          className={classNames(styles.input, className)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-theme={theme}
          data-size={size}
        />
      )}
    </>
  )
}
