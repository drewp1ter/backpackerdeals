import * as React from 'react'
import classNames from 'classnames'

import styles from './cardsWrapper.module.scss'

export interface IProps {
  readonly title: string
  readonly linkTitle: string
  readonly children: JSX.Element | JSX.Element[]
  readonly className?: string
}

const CardsWrapper: React.FC<IProps> = ({ title, linkTitle, children, className }) => {
  const mainClass = classNames(styles.main, className)
  return (
    <div className={mainClass}>
      <h2>{title}</h2>
      <a>
        {linkTitle}
        <i className="fas fa-angle-double-right"></i>
      </a>
      {children}
    </div>
  )
}

export default CardsWrapper
