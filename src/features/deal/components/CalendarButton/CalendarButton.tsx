import classNames from 'classnames'
import React from 'react'

import styles from './CalendarButton.module.scss'

export interface IProps {
  readonly className?: string
  readonly theme?: 'select' | 'selected' | 'green'
  readonly children?: JSX.Element | string
  readonly onClick?: (data: any) => void
  readonly data?: any
}

export const CalendarButton: React.FC<IProps> = ({ className, theme, children, onClick, data }) => {
  const handleClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(currentTarget.dataset.data)
  }

  return (
    <button className={classNames(styles.button, className)} onClick={handleClick} data-data={data} data-theme={theme}>
      {children}
    </button>
  )
}
