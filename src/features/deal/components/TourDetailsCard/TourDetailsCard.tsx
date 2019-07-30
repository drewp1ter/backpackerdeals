import classNames from 'classnames'
import React, { RefObject } from 'react'

import styles from './TourDetailsCard.module.scss'

export interface IProps {
  readonly className?: string
  readonly title: string
  readonly items?: string[]
  readonly children?: JSX.Element
  readonly rf?: RefObject<HTMLDivElement>
}

export const TourDetailsCard: React.FC<IProps> = ({ className, title, items, children, rf }) => {
  return (
    <div ref={rf} className={classNames(styles.tourDetails, className)}>
      <h4>{title}</h4>
      {items && (
        <ul>
          {items.map((item: string, idx: number) => (
            <li key={idx}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  )
}
