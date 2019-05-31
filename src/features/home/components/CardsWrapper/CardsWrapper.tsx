import * as React from 'react'
import classNames from 'classnames'

import styles from './CardsWrapper.module.scss'

export interface IProps {
  readonly title: string
  readonly linkTitle: string
  readonly children: JSX.Element | JSX.Element[]
  readonly className?: string
}

export const CardsWrapper: React.FC<IProps> = ({ title, linkTitle, children, className }) => {
  const mainClass = classNames(styles.root, className)
  return (
    <div className={mainClass}>
      <h2>{title}</h2>
      <p>
        <a>
          {linkTitle}
          <i className="fas fa-angle-double-right" />
        </a>
      </p>
      {children}
    </div>
  )
}
