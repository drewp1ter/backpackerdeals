import * as React from 'react'

import { Button, MobileMenuWrapper } from 'components'
import { Select } from 'components'
import { FiltersDropdown, PriceRange } from 'features/search/components'

import { FiltersActions, IFiltersState } from 'features/search'
import { numberOfDays } from '../../../../components/AdvancedSearch/data'

import styles from './FiltersMenu.module.scss'

interface IProps {
  filters: JSX.Element | JSX.Element[]
}

export const FiltersMenu: React.FC<IFiltersState & FiltersActions & IProps> = ({
  filtersAreOpened,
  closeFilters,
  openFilters,
  filters,
}) => (
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
            <i onClick={closeFilters} className="fas fa-search" />
            <i className="fas fa-filter" />
          </div>
        </div>

        <hr />

        <input placeholder="Type country" type="text" />

        <FiltersDropdown title="Select city">{filters}</FiltersDropdown>
        <Select
          className={styles.filtersSelect}
          onChange={() => {}}
          options={['Australia', 'Australia', 'Australia', 'Australia']}
          theme="dark"
          selectedOption="Select country"
          bodyTheme="mobile"
        />
        <Select
          className={styles.filtersSelect}
          onChange={() => {}}
          options={numberOfDays}
          theme="dark"
          selectedOption="Number of days"
          bodyTheme="mobile"
        />

        <PriceRange className={styles.filtersPriceRange} />

        <div className={styles.filtersButtons}>
          <Button onClick={closeFilters} theme="orange" form="rectangled" className={styles.orangeButton}>
            Apply filter
          </Button>

          <Button theme="transparent" form="standart" size="sm">
            Reset filter
          </Button>
        </div>
      </>
    </MobileMenuWrapper>
  </div>
)
