import classNames from 'classnames'
import React, { RefObject } from 'react'

import styles from './TourDetailsCard.module.scss'

export interface IProps {
  readonly className?: string
  readonly title: string
  readonly items?: string[]
  readonly children?: JSX.Element
  readonly navAnchor?: RefObject<HTMLDivElement>
}

export const TourDetailsCard: React.FC<IProps> = ({ className, title, items, children, navAnchor }) => {
  return (
    <div className={classNames(styles.tourDetails, className)}>
      <div ref={navAnchor} className={styles.anchor} />
      <h3>{title}</h3>
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
