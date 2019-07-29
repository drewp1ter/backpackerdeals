import React from 'react'

import { DealCard } from 'components'
import { IProps as IDealCardProps } from 'components/DealCard/DealCard'
import styles from './DealsSection.module.scss'

export interface IProps {
  readonly title: string
  readonly data: IDealCardProps[]
}

export const DealsSection: React.FC<IProps> = ({ title, data }) => {
  return (
    <div className={styles.dealsSection}>
      <h3>{title}</h3>

      <ul className={styles.lastMinuteDeal}>
        {data.map((card, index) => (
          <DealCard view="vertical" {...card} key={index} />
        ))}
      </ul>
      <div className={styles.nav}>
        <i className="fas fa-chevron-left" />
        <i className="fas fa-chevron-right" />
      </div>
    </div>
  )
}
