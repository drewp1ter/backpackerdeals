import React, { useReducer } from 'react'

import { LastMinuteDealCard } from 'components'
import data from './data'
import styles from './MoreActivities.module.scss'
import reducer, { IState, IAction, initialState, ActionType, ViewType } from './reducer'

export const MoreActivities: React.FC = () => {
  const pages = 10
  const [{ view, sortDec, page }, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as ViewType
    dispatch({ type: ActionType.setView, payload: view })
  }

  const handleChangeSortOrder = () => dispatch({ type: ActionType.toggleDec })
  const renderCards = () => data && data.map((card, idx) => <LastMinuteDealCard view="reversed" {...card} key={`${idx}-card`} />)
  const handleClickPageItem = (e: React.MouseEvent<HTMLElement>) =>
    dispatch({ type: ActionType.setPage, payload: +e.currentTarget.innerHTML })

  const renderPageControls = () =>
    [...Array(5).keys()].map(idx => {
      const pageItem = page - 2 < 1 ? idx + 1 : page + 2 > pages ? pages - 4 + idx : page - 2 + idx
      return (
        <span key={pageItem} onClick={handleClickPageItem} data-active={page === pageItem}>
          {pageItem}
        </span>
      )
    })

  return (
    <div className={styles.moreActivities}>
      <h3>More Activities</h3>
      <div className={styles.header}>
        <span>{data.length} Activities</span>
        <span className={styles.viewStyle}>
          List view:
          <i onClick={handleChangeView} className="fas fa-th-large" data-active={view === ViewType.tile} data-view={ViewType.tile} />
          <i onClick={handleChangeView} className="fas fa-list" data-active={view === ViewType.list} data-view={ViewType.list} />
          Sort by:
          <i onClick={handleChangeSortOrder} className={`fas ${sortDec ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} />
        </span>
      </div>
      <div className={styles.cards}>{renderCards()}</div>
      <div className={styles.pagesControls}>
      {renderPageControls()}
      <button>
        <i className="fas fa-arrow-right" />
      </button>
      </div>
    </div>
  )
}
