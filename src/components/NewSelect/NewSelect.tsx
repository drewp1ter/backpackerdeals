import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './NewSelect.module.scss'

interface IProps {
  readonly options?: JSX.Element[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme: 'dark' | 'light'
  readonly value: JSX.Element
  readonly disabled?: boolean
  readonly bodyTheme?: 'mobile'
  readonly onSelect?: () => void
}

export const NewSelect: React.FC<IProps> = ({
  children,
  className,
  options,
  theme,
  value,
  disabled = false,
  onSelect,
  bodyTheme,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const toggleSelect = () => !disabled && setOpen(!isOpen)
  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {

  }

  return (
    <div className={styles.searchSelect} data-theme={theme} data-bodytheme={bodyTheme} tabIndex={0} onBlur={handleClose}>
      <div
        className={classNames(styles.select, className)}
        data-opened={isOpen && 'opened'}
        data-disabled={disabled && 'disabled'}
        onClick={toggleSelect}
      >
        <i className="fas fa-angle-down" />
        <span>{value}</span>
      </div>

      {isOpen && (
        <div className={styles.optionBlock}>
          {options &&
            options.map((option, index) => (
              <p key={`option-${index}`} className={styles.option} onClick={handleSelect} data-index={index}>
                {option}
              </p>
            ))}
          {children}
        </div>
      )}
    </div>
  )
}
