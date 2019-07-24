import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './NewSelect.module.scss'

interface IProps {
  readonly options?: string[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme?: 'default' | 'theme1'
  readonly value?: string
  readonly disabled?: boolean
  readonly bodyStyle?: 'mobile'
  readonly name?: string
  readonly onChange?: (value: any, name: string) => void
  readonly size?: 'md' | 'md-font' | 'lg'
  readonly anglePos?: 'left' | 'right'
  readonly placeholder?: string
}

export const NewSelect: React.FC<IProps> = ({
  children,
  className,
  options,
  theme = 'default',
  value,
  disabled = false,
  onChange,
  size = 'md',
  bodyStyle,
  name = '',
  anglePos = 'left',
  placeholder,
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
      data-bodystyle={bodyStyle}
      tabIndex={0}
      onBlur={handleClckOutside}
      data-size={size}
    >
      <div className={styles.select} data-opened={isOpen} data-disabled={disabled} onClick={toggleSelect}>
        {anglePos === 'left' && <i className="fas fa-angle-down" data-pos={anglePos} />}
        <span>{value || placeholder}</span>
        {anglePos === 'right' && <i className="fas fa-angle-down" data-pos={anglePos} />}
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
