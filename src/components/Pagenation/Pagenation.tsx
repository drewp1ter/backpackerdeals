import classNames from 'classnames'
import React from 'react'

import styles from './Pagenation.module.scss'

export interface IProps {
  readonly onChange?: (page: number, name?: string) => void
  readonly value?: number
  readonly name?: string
  readonly className?: string
  readonly maxPages?: number
}

export const Pagenation: React.FC<IProps> = ({ value = 0, onChange, className, maxPages = 0, name }) => {

  const handlePageControls = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const action = Number(currentTarget.dataset.action)
    if (action) {
      (value < maxPages || value > 1) && onChange && onChange(value + action, name)
    } else {
      onChange && onChange(+currentTarget.innerHTML, name)
    }
  }

  const renderDigits = () => [...Array(maxPages > 5 ? 5 : maxPages).keys()].map(idx => {
    const pageItem = maxPages > 5 ? value - 2 < 1 ? idx + 1 : value + 2 > maxPages ? maxPages - 4 + idx : value - 2 + idx : idx + 1
    return (
      <span key={pageItem} onClick={handlePageControls} data-active={value === pageItem}>
        {pageItem}
      </span>
    )
  })

  return (
    <div className={classNames(styles.pagenation, className)}>
      <button aria-label="prev" onClick={handlePageControls} data-action="-1" disabled={value === 1}>
        <i className="fas fa-arrow-left" />
      </button>
      {renderDigits()}
      <button aria-label="next" onClick={handlePageControls} data-action="1" disabled={value === maxPages}>
        <i className="fas fa-arrow-right" />
      </button>
    </div>
  )
}