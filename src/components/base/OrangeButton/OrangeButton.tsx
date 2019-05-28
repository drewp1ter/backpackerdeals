import * as React from 'react'

import classNames from 'classnames'

import './OrangeButton.scss'

export interface IProps {
  readonly children?: React.ReactNode
  readonly className?: string
  readonly disabled?: boolean
  readonly onClick?: () => void
}

export const OrangeButton: React.FC<IProps> = ({ className = '', children, onClick, disabled = false }) => (
  <button className={classNames("orange-button", className)} disabled={disabled} onClick={onClick}>
    {children}
  </button>
)
