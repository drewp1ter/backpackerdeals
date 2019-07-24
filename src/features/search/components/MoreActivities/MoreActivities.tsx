import React, { useReducer } from 'react'

import { LastMinuteDealCard } from 'components'
import { Filters } from '..'
import { FiltersMenu } from '../../containers'
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

  const handleChangeSortOrder = () => dispatch({ type: ActionType.toggleDec })
  const renderCards = () =>
    cards &&
    cards.map((card, idx) => (
      <LastMinuteDealCard className={styles.card} view={view} {...card} key={idx} likeable={view === ViewType.list ? 'wide' : 'short'} />
    ))

  const handlePageControls = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const { action } = currentTarget.dataset
    if (action) {
      action === 'next' && page + 1 <= pages && dispatch({ type: ActionType.nextPage })
      action === 'prev' && page - 1 >= 1 && dispatch({ type: ActionType.prevPage })
    } else {
      dispatch({ type: ActionType.setPage, payload: +currentTarget.innerHTML })
    }
  }

  const renderPageControls = () => (
    <div className={styles.pagesControls}>
      <button aria-label="prev" onClick={handlePageControls} data-action="prev" disabled={page === 1}>
        <i className="fas fa-arrow-left" />
      </button>
      {[...Array(5).keys()].map(idx => {
        const pageItem = page - 2 < 1 ? idx + 1 : page + 2 > pages ? pages - 4 + idx : page - 2 + idx
        return (
          <span key={pageItem} onClick={handlePageControls} data-active={page === pageItem}>
            {pageItem}
          </span>
        )
      })}
      <button aria-label="next" onClick={handlePageControls} data-action="next" disabled={page === pages}>
        <i className="fas fa-arrow-right" />
      </button>
    </div>
  )

  return (
    <div className={styles.moreActivities}>
      <h3>More Activities</h3>
      <FiltersMenu />
      <div className={styles.content}>
        <Filters className={styles.filters} filters={filters} />
        <div className={styles.cardsContainer}>
          <div className={styles.header}>
            <span>{cards.length} Activities</span>
            <span className={styles.viewStyle}>
              <span className={styles.leftSide}>
                List view:
                <i onClick={handleChangeView} className="fas fa-th-large" data-active={view === ViewType.tile} data-view={ViewType.tile} />
                <i onClick={handleChangeView} className="fas fa-list" data-active={view === ViewType.list} data-view={ViewType.list} />
              </span>
              Sort by:
              <i onClick={handleChangeSortOrder} className={`fas ${sortDec ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} />
            </span>
          </div>
          <ul data-view={view} className={styles.cards}>
            {renderCards()}
          </ul>
          {renderPageControls()}
        </div>
      </div>
    </div>
  )
}
