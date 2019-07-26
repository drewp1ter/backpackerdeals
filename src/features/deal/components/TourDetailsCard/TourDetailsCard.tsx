import classNames from 'classnames'
import React from 'react'

import styles from './TourDetailsCard.module.scss'

export interface IProps {
  readonly className?: string
  readonly title: string
  readonly items?: string[]
  readonly children?: JSX.Element
}

export const TourDetailsCard: React.FC<IProps> = ({ className, title, items, children }) => {
  return (
    <div className={classNames(styles.tourDetails, className)}>
      <h4>{title}</h4>
      {children ? (
        children
      ) : (
        <ul>
          {items &&
            items.map((item: string, idx: number) => (
              <li key={idx}>
                <span>{item}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}
