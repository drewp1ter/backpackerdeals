import React, { useState } from 'react'

import classNames from 'classnames'
import countries from './countries'

import styles from './PhoneNumber.module.scss'

interface IProps {
  readonly options?: JSX.Element[]
  readonly className?: string
  readonly value?: JSX.Element
  readonly disabled?: boolean
  readonly onChange?: () => void
  readonly size?: 'md' | 'lg'
}

export const PhoneNumber: React.FC<IProps> = ({ children, className, options, value, disabled = false, onChange, size = 'md' }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const toggleSelect = () => !disabled && setOpen(!isOpen)
  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {}

  return (
    <div className={classNames(styles.phoneNumber, className)}>
      <div className={styles.countryCode} tabIndex={0} onBlur={handleClose}>
        <div
          className={classNames(styles.currentValue, styles.option)}
          data-opened={isOpen}
          data-disabled={disabled}
          data-size={size}
          onClick={toggleSelect}
        >
          {countries[0][0]}
          <span>{countries[0][1]}</span>
          <i className="fas fa-angle-down" />
        </div>

        {isOpen && (
          <ul className={styles.optionBlock} data-size={size}>
            {countries.map((country, idx) => (
              <li key={idx} className={styles.option} onClick={handleSelect} data-idx={idx}>
                {country[0]}
                <span>{country[1]}</span>
              </li>
            ))}
            {children}
          </ul>
        )}
      </div>
    </div>
  )
}
