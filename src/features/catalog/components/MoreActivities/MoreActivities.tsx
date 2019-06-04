import React, { useState } from 'react'

import { LastMinuteDealCard, Checkbox } from 'components'
import styles from './MoreActivities.module.scss'
import { cards, filters } from './data'

export const MoreActivities: React.FC = () => {
  const [view, setView] = useState<string>('tile')
  const [sortDec, setSortDec] = useState<boolean>(true)

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as any
    setView(view)
  }

  const handleChangeSortOrder = () => setSortDec(!sortDec)

  const renderCards = () => cards && cards.map((card, idx) => <LastMinuteDealCard view="reversed" {...card} key={`${idx}-card`} />)

  const renderFilters = () => filters && filters.map((filter, index) => <Checkbox key={`${index}-filter`} label={filter} />)

  return (
    <div className={styles.moreActivities}>
      <h3>More Activities</h3>
      <div className={styles.header}>
        <span>{cards.length} Activities</span>
        <span className={styles.viewStyle}>
          List view:
          <i onClick={handleChangeView} className="fas fa-th-large" data-active={view === 'tile'} data-view={'tile'} />
          <i onClick={handleChangeView} className="fas fa-list" data-active={view === 'list'} data-view="list" />
          Sort by:
          <i onClick={handleChangeSortOrder} className={`fas ${sortDec ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} />
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.filters}>
          <h4>Select city</h4>
          {renderFilters()}
        </div>
        <div className={styles.cards}>{renderCards()}</div>
      </div>
    </div>
  )
}
