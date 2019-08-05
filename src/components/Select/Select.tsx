import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './Select.module.scss'

interface IProps {
  readonly options?: string[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme?: 'default' | 'light' | 'defaultNoBorder' | 'booking'
  readonly value?: string
  readonly disabled?: boolean
  readonly name?: string
  readonly onChange?: (value: any, name: string) => void
  readonly size?: 'md' | 'md-font' | 'lg' | 'no'
  readonly placeholder?: string
  readonly renderIcon?: () => JSX.Element
  readonly arrowPos?: 'left' | 'right'
}

export const Select: React.FC<IProps> = ({
  children,
  className,
  options,
  theme = 'default',
  value,
  disabled = false,
  onChange,
  size = 'md',
  name = '',
  placeholder,
  renderIcon,
  arrowPos = 'left'
}) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleClckOutside = (event: React.FocusEvent<HTMLDivElement>) =>
    !event.currentTarget.contains(event.relatedTarget as Node) && setOpen(false)

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
      tabIndex={0}
      onBlur={handleClckOutside}
      data-size={size}
      data-opened={isOpen}
    >
      <div className={styles.select} data-disabled={disabled} onClick={toggleSelect}>
        {arrowPos === 'left' && (renderIcon ? renderIcon() :  <i data-pos={arrowPos} className="fas fa-angle-down" />)}
        <span>{value || placeholder}</span>
        {arrowPos === 'right' && (renderIcon ? renderIcon() : <i data-pos={arrowPos} className="fas fa-angle-down" />)}
      </div>

      {isOpen && (
        <ul className={styles.optionBlock}>
          {options &&
            options.map((option, idx) => (
              <li key={idx} className={styles.option} onClick={handleClick} data-index={idx}>
                {option}
              </li>
            ))}
          {children}
        </ul>
      )}
    </div>
  )
}
