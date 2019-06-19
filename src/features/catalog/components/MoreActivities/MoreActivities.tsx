import React, { useReducer } from 'react'

import { PriceRange } from '..'
import { Checkbox, LastMinuteDealCard } from 'components'
import { cards, filters } from './data'
import styles from './MoreActivities.module.scss'
import reducer, { ActionType, IAction, initialState, IState, ViewType } from './reducer'

export const MoreActivities: React.FC = () => {
  const pages = 10
  const [{ view, sortDec, page }, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as ViewType
    dispatch({ type: ActionType.setView, payload: view })
  }

  const renderFilters = () => filters && filters.map((filter, index) => <Checkbox key={`${index}-filter`} label={filter} />)
  const handleChangeSortOrder = () => dispatch({ type: ActionType.toggleDec })
  const renderCards = () => cards && cards.map((card, idx) => <LastMinuteDealCard className={styles.card} view={view} {...card} key={`${idx}-card`} />)

  const handlePageControls = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const { action } = currentTarget.dataset
    if (action) {
      action === 'next' && page + 1 <= pages && dispatch({ type: ActionType.nextPage })
    } else {
      dispatch({ type: ActionType.setPage, payload: +currentTarget.innerHTML })
    }
  }

  const renderPageControls = () =>
    [...Array(5).keys()].map(idx => {
      const pageItem = page - 2 < 1 ? idx + 1 : page + 2 > pages ? pages - 4 + idx : page - 2 + idx
      return (
        <span key={pageItem} onClick={handlePageControls} data-active={page === pageItem}>
          {pageItem}
        </span>
      )
    })

  return (
    <div className={styles.moreActivities}>
      <h3>More Activities</h3>
      <div className={styles.content}>
        <div className={styles.filters}>
          <h4>Select city</h4>
          {renderFilters()}
          <PriceRange />
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.header}>
            <span>{cards.length} Activities</span>
            <span className={styles.viewStyle}>
              List view:
              <i onClick={handleChangeView} className="fas fa-th-large" data-active={view === ViewType.tile} data-view={ViewType.tile} />
              <i onClick={handleChangeView} className="fas fa-list" data-active={view === ViewType.list} data-view={ViewType.list} />
              Sort by:
              <i onClick={handleChangeSortOrder} className={`fas ${sortDec ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} />
            </span>
          </div>
          <div data-view={view} className={styles.cards}>
            {renderCards()}
          </div>
          <div className={styles.pagesControls}>
            {renderPageControls()}
            <button aria-label="next" onClick={handlePageControls} data-action="next">
              <i className="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
