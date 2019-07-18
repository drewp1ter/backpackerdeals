import React, { useState } from 'react'

import classNames from 'classnames'
import { ScrollBar } from '..'

import styles from './NewSelect.module.scss'

interface IProps {
  readonly options?: string[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme: 'dark' | 'light'
  readonly value: string
  readonly disabled?: boolean
  readonly bodyTheme?: 'mobile'
  readonly name?: string
  readonly onChange?: (value: any, name: string) => void
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
  onChange,
  size = 'md',
  bodyTheme,
  name = '',
  anglePos = 'left',
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClose = () => setOpen(false)
  const toggleSelect = () => !disabled && setOpen(!isOpen)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const index = event.currentTarget.dataset.index || 0
    options && onChange && onChange(options[+index], name)
    setOpen(false)
  }

  return (
    <div
      className={classNames(styles.searchSelect, className)}
      data-theme={theme}
      data-bodytheme={bodyTheme}
      tabIndex={0}
      onBlur={handleClose}
    >
      <div className={styles.select} data-opened={isOpen} data-disabled={disabled} data-size={size} onClick={toggleSelect}>
        {anglePos === 'left' && <i className="fas fa-angle-down" data-pos={anglePos} />}
        <span>{value}</span>
        {anglePos === 'right' && <i className="fas fa-angle-down" data-pos={anglePos} />}
      </div>

      {isOpen && (
        <ul className={styles.optionBlock} data-size={size}>
          <ScrollBar>
            {options &&
              options.map((option, index) => (
                <li key={`option-${index}`} className={styles.option} onClick={handleClick} data-index={index}>
                  {option}
                </li>
              ))}
            {children}
          </ScrollBar>
        </ul>
      )}
    </div>
  )
}
