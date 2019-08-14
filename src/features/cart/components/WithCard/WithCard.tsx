import classNames from 'classnames'
import React from 'react'
import styles from './WithCard.module.scss'

export interface IProps {
  readonly children: JSX.Element | JSX.Element[],
  readonly className?: string
}

export const WithCard: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.withCard, className)}>
      {children}
    </div>
  )
}
