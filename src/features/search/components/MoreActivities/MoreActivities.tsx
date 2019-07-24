import React, { useReducer, useState } from 'react'

import { Button, Checkbox, LastMinuteDealCard } from 'components'
import { NewSelect } from 'components'
import { FiltersMenu } from 'features/search/containers'
import { numberOfDays } from '../../../../components/AdvancedSearch/data'
import { PriceRange } from '../../components'
import { cards, filters } from './data'
import styles from './MoreActivities.module.scss'
import reducer, { ActionType, IAction, initialState, IState, ViewType } from './reducer'

const counries = ['Australia', 'Dania', 'Australia', 'Iceland', 'New Zeland', 'Canada', 'New Zeland', 'Canada', 'Dania', 'Australia', 'Iceland', 'New Zeland', 'Canada', 'New Zeland', 'Canada']
const initFilters = {
  country: '',
  city: '',
  numberOfDays: 'Select Number of days',
  accommodationStyle: 'All accommodation styles',
  styleOfTravel: 'Family friendly',
  priceRange: [100, 200],
}

export const MoreActivities: React.FC = () => {
  const pages = 10
  const [{ view, sortDec, page }, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, initialState)
  const [selectedFilters, setSelectedFilters] = useState({ ...initFilters })

  const resetFilters = () => setSelectedFilters({ ...initFilters })

  const handleChangeSelect = (value: any, key: string) => setSelectedFilters({ ...selectedFilters, [key]: value })

  const handleChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const view = e.currentTarget.dataset.view as ViewType
    dispatch({ type: ActionType.setView, payload: view })
  }

  const renderFilters = () =>
    filters && (
      <div className={styles.filtersCheckboxes}>
        {filters.map((filter, index) => (
          <Checkbox className={styles.checkbox} key={`${index}-filter`} label={filter} />
        ))}
      </div>
    )
  const handleChangeSortOrder = () => dispatch({ type: ActionType.toggleDec })
  const renderCards = () =>
    cards &&
    cards.map((card, idx) => (
      <LastMinuteDealCard
        className={styles.card}
        view={view}
        {...card}
        key={`${idx}-card`}
        likeable={view === ViewType.list ? 'wide' : 'short'}
      />
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
      <FiltersMenu filters={renderFilters()} />
      <div className={styles.content}>
        <div className={styles.filters}>
          <h4>Select country</h4>
          <NewSelect
            placeholder="Select Coz"
            className={styles.filtersSelect}
            options={counries}
            name="country"
            size="lg"
            value={selectedFilters.country}
            onChange={handleChangeSelect}
          />
          <h4>Select city</h4>
          {renderFilters()}
          <h4>Number of days</h4>
          <NewSelect
            className={styles.filtersSelect}
            name="numberOfDays"
            options={numberOfDays}
            size="lg"
            value={selectedFilters.numberOfDays}
            onChange={handleChangeSelect}
          />
          <h4>Accomodation style</h4>
          <NewSelect
            className={styles.filtersSelect}
            name="accommodationStyle"
            size="lg"
            options={['All accommodation styles', 'Australia', 'Australia', 'Australia']}
            value={selectedFilters.accommodationStyle}
            onChange={handleChangeSelect}
          />
          <h4>Style of travel</h4>
          <NewSelect
            className={styles.filtersSelect}
            name="styleOfTravel"
            size="lg"
            options={['Family friendly', 'Australia', 'Australia', 'Australia']}
            value={selectedFilters.styleOfTravel}
            onChange={handleChangeSelect}
          />
          <PriceRange range={selectedFilters.priceRange} onChange={handleChangeSelect} name="priceRange" />
          <Button theme="transparent" form="standart" size="sm" onClick={resetFilters}>
            Reset filter
          </Button>
        </div>
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
