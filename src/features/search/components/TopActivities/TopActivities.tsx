import classNames from 'classnames'
import React from 'react'

import { DealCard } from 'components'
import { circleScroll } from 'utils'
import data from './data'
import styles from './TopActivities.module.scss'

export interface IProps {
  readonly className?: string
}

export const TopActivities: React.FC<IProps> = ({ className }) => {
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(1140, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({ target, maxScrollLeft: 95, maxScrollRight: 1795, offsetLeft: 935, offsetRight: 847 })

  return (
    <section className={classNames(styles.topActivities, className)}>
      <h3>Top 3 Activities in Australia</h3>

      <ul ref={setStartPos} className={styles.cards} onScroll={handleScroll}>
        {data.map((card, index) => (
          <DealCard view="reversed" {...card} key={index} likeable="wide" />
        ))}
        {data.map((card, index) => (
          <DealCard view="reversed" {...card} key={index} className={styles.carousel} likeable="wide" />
        ))}
        <DealCard view="reversed" {...data[0]} className={styles.carousel} likeable="wide" />
      </ul>
    </section>
  )
}
