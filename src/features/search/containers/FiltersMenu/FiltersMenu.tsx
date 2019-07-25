import * as React from 'react'

import { MobileMenuWrapper } from 'components'
import { ISearchActions } from 'features/search'
import { Filters } from '../../components'
import { filters } from '../../components/MoreActivities/data'

import styles from './FiltersMenu.module.scss'

interface IProps {
  readonly filtersAreOpened: boolean
}

export const FiltersMenu: React.FC<Partial<ISearchActions> & IProps> = ({ filtersAreOpened, closeFilters, openFilters, openSearch }) => {
  const handleClickSearch = () => {
    closeFilters && closeFilters()
    openSearch && openSearch()
  }

  return (
    <div className={styles.filtersMenu}>
      <button onClick={openFilters}>
        <i className="fas fa-filter" />
        <span>Show filters</span>
      </button>

      <MobileMenuWrapper open={filtersAreOpened} className={styles.filtersMenuWrapper}>
        <>
          <div className={styles.filtersHeader}>
            <div>
              <i onClick={closeFilters} className="fas fa-arrow-left" />
              <span>Filter</span>
            </div>

            <div className={styles.filtersHeaderControls}>
              <i onClick={handleClickSearch} className="fas fa-search" />
              <i className="fas fa-filter" />
            </div>
          </div>

          <hr />

          <Filters filters={filters} viewType="mobile" />
        </>
      </MobileMenuWrapper>
    </div>
  )
}
