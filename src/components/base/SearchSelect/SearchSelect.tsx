import * as React from 'react'

import styles from './SearchSelect.module.scss'

interface IProps {
  readonly options?: Array<string>
  readonly children?: React.ReactNode
  readonly theme: 'dark' | 'light'
  readonly selectedOption: string
  readonly disabled?: boolean
  readonly handleSelect: (event: React.MouseEvent<HTMLElement>) => void
}

export const SearchSelect: React.FC<IProps> = ({ children, options, theme, selectedOption, disabled = false, handleSelect }) => {
  const [isOpen, toggleSelect] = React.useState(false)

  return (
    <div className={styles.searchSelect} data-theme={theme}>
      <div
        className={styles.select}
        data-opened={isOpen && 'opened'}
        data-disabled={disabled && 'disabled'}
        onClick={() => !disabled && toggleSelect(!isOpen)}
      >
        <i className="fas fa-angle-down" />
        <span>{selectedOption}</span>
      </div>

      {isOpen && (
        <div className={styles.optionBlock}>
          {options &&
            options.map((option, index) => (
              <p key={`option-${index}`} className={styles.option} onClick={handleSelect} data-value={index}>
                {option}
              </p>
            ))}
          {children}
        </div>
      )}
    </div>
  )
}
