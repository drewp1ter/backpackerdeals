import React, { useReducer, useState } from 'react'

import { LastMinuteDealCard } from 'components'
import data from './data'
import styles from './MoreActivities.module.scss'

enum ActionType {
  setPage = 'SET_PAGE',
  setView = 'SET_VIEW',
  toggleDec = 'TOGGLE_DEC',
}

enum ViewType {
  tile = 'tile',
  list = 'list',
}

interface IState {
  page: number
  view: ViewType
  sortDec: boolean
}

interface IAction {
  type: ActionType
  payload?: any
}

const initialState = {
  page: 4,
  view: ViewType.tile,
  sortDec: true,
}

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.setPage:
      return { ...state, page: action.payload }
    case ActionType.setView:
      return { ...state, view: action.payload }
    case ActionType.toggleDec:
      return { ...state, sortDec: !state.sortDec }
    default:
      return state
  }
}

export const MoreActivities: React.FC = () => {
  const [{ view, sortDec, page }, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as ViewType
    dispatch({ type: ActionType.setView, payload: view })
  }

  const handleChangeSortOrder = () => dispatch({ type: ActionType.toggleDec })

  const renderCards = () => data && data.map((card, idx) => <LastMinuteDealCard view="reversed" {...card} key={`${idx}-card`} />)

  const pages = 10
  const renderPageControls = () => {
    return [...Array(5).keys()].map(idx => {
      const a = page - 2 < 1 ? idx + 1 : page + 2 > pages ? pages - 4 + idx : page - 2 + idx

      return <i>{a}</i>
    })
  }

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
      <div className={styles.pagesControls}>{renderPageControls()}</div>
    </div>
  )
}
