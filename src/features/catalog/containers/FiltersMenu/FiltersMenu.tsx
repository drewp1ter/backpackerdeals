import * as React from 'react'

import { MobileMenuWrapper, OrangeButton } from 'components'
import { FiltersDropdown } from 'features/catalog/components'

import { FiltersActions } from 'features/catalog'
import Types from 'Types'

import styles from './FiltersMenu.module.scss'

interface IProps {
  filters: JSX.Element | JSX.Element[]
}
 
export const FiltersMenu: React.FC<Partial<Types.RootState> & FiltersActions & IProps> = ({ filtersAreOpened, closeFilters, openFilters, filters }) => (
  <div className={styles.filtersMenu}>
    <button onClick={openFilters}>Show filters</button>

    <MobileMenuWrapper open={filtersAreOpened}>
      <div className={styles.filtersHeader}>
        <div>
          <i onClick={closeFilters} className="fas fa-arrow-left" />
          <span>Filter</span>
        </div>

        <i className="fas fa-search" />
      </div>

      <hr />

      <input placeholder="Type country" type="text" />

      <FiltersDropdown title="Select city">
        {filters}
      </FiltersDropdown>
      <FiltersDropdown title="Number of days">

      </FiltersDropdown>
      <FiltersDropdown title="Style of travel">

      </FiltersDropdown>

      <div className={styles.filtersButtons}>
        <OrangeButton theme="rectangled" className={styles.orangeButton}>
          Apply filter
        </OrangeButton>

        <button className={styles.resetButton}>
          Reset filter
        </button>

      </div>
    </MobileMenuWrapper>
  </div>
)
