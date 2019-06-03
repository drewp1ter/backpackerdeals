import React, { useState } from 'react'

import { LastMinuteDealCard } from 'components'
import styles from './MoreActivities.module.scss'
import data from './data'

export const MoreActivities: React.FC = () => {
  const [view, setView] = useState<string>('tile')
  const [sortDec, setSortDec] = useState<boolean>(true)

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as any
    setView(view)
  }

  const handleChangeSortOrder = () => setSortDec(!sortDec)

  const renderCards = () => data && data.map((card, idx) => <LastMinuteDealCard {...card} key={`${idx}-card`} />)

  return (
    <div className={styles.moreActivities}>
      <h3>More Activities</h3>
      <div className={styles.header}>
        <span>{data.length} Activities</span>
        <span className={styles.viewStyle}>
          List view:
          <i onClick={handleChangeView} className="fas fa-th-large" data-active={view === 'tile'} data-view={'tile'} />
          <i onClick={handleChangeView} className="fas fa-list" data-active={view === 'list'} data-view="list" />
          Sort by:
          <i onClick={handleChangeSortOrder} className={`fas ${sortDec ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} />
        </span>
      </div>
      <div className={styles.cards}>{renderCards()}</div>
    </div>
  )
}
