import classNames from 'classnames'
import React, { useState } from 'react'

import { DealCard, Pagenation } from 'components'
import { Filters } from '..'
import { FiltersMenu } from '../../containers'
import { cards, filters } from './data'

import styles from './MoreActivities.module.scss'

enum ViewType {
  tile = 'reversed',
  list = 'horizontal',
}

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly page: number
  readonly view: ViewType
  readonly sortDec: boolean
}

export const MoreActivities: React.FC<IProps> = ({ className }) => {
  const initialState: IState = {
    page: 1,
    sortDec: true,
    view: ViewType.tile,
  }

  const [state, setState] = useState<IState>(initialState)
  const { view, sortDec, page } = state

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as ViewType
    setState({ ...state, view })
  }
  const handleChangePage = (page: number) => setState({ ...state, page })
  const handleChangeSortOrder = () => setState({ ...state, sortDec: !state.sortDec })
  const renderCards = () =>
    cards &&
    cards.map((card, idx) => (
      <DealCard className={styles.card} view={view} {...card} key={idx} likeable={view === ViewType.list ? 'wide' : 'short'} />
    ))

  return (
    <section className={classNames(styles.moreActivities, className)}>
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
          <Pagenation className={styles.pagenation} value={page} maxPages={10} onChange={handleChangePage} />
        </div>
      </div>
    </section>
  )
}
