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
  readonly size?: 'md' | 'lg'
  readonly anglePos?: 'left' | 'right'
}

export const NewSelect: React.FC<IProps> = ({
  children,
  className,
  options,
  theme,
  value,
  disabled = false,
  onSelect,
  size = 'md',
  bodyTheme,
  anglePos = 'left'
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const toggleSelect = () => !disabled && setOpen(!isOpen)
  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {

  }

  return (
    <div className={classNames(styles.searchSelect, className)} data-theme={theme} data-bodytheme={bodyTheme} tabIndex={0} onBlur={handleClose}>
      <div
        className={styles.select}
        data-opened={isOpen}
        data-disabled={disabled}
        data-size={size}
        onClick={toggleSelect}
      >
        { anglePos === 'left' && <i className="fas fa-angle-down" data-pos={anglePos} /> }
        {value}
        { anglePos === 'right' && <i className="fas fa-angle-down" data-pos={anglePos} /> }
      </div>

      {isOpen && (
        <ul className={styles.optionBlock} data-size={size}>
          {options &&
            options.map((option, index) => (
              <li key={`option-${index}`} className={styles.option} onClick={handleSelect} data-index={index}>
                {option}
              </li>
            ))}
          {children}
        </ul>
      )}
    </div>
  )
}
