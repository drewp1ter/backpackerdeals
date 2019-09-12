import classNames from 'classnames'
import React from 'react'

import { DealCard } from 'components'
import data from './data'
import styles from './TopActivities.module.scss'

export interface IProps {
  readonly className?: string
}

export const TopActivities: React.FC<IProps> = ({ className }) => {

  return (
    <section className={classNames(styles.topActivities, className)}>
      <h3>Top 3 Activities in Australia</h3>

      <ul className={styles.cards}>
        {data.map((card, index) => (
          <DealCard view="reversed" {...card} key={index} likeable="wide" />
        ))}
      </ul>
    </section>
  )
}
