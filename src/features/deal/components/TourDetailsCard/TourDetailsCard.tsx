import classNames from 'classnames'
import React, { RefObject, useState } from 'react'

import styles from './TourDetailsCard.module.scss'

export interface IProps {
  readonly className?: string
  readonly title: string
  readonly items?: string[]
  readonly children?: JSX.Element
  readonly navAnchor?: RefObject<HTMLDivElement>
}

export const TourDetailsCard: React.FC<IProps> = ({ className, title, items, children, navAnchor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const handleToggle = () => setIsOpen(!isOpen)
  return (
    <section className={classNames(styles.tourDetails, className)} data-open={isOpen}>
      <div ref={navAnchor} className={styles.anchor} />
      <div onClick={handleToggle} className={styles.header}>
        <h3>{title}</h3>
        <i className="fas fa-chevron-up" />
      </div>
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
    </section>
  )
}
