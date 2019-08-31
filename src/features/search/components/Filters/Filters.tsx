import classNames from 'classnames'
import { Button, Checkbox, Select } from 'components'
import { numberOfDays } from 'features/page/components/AdvancedSearch/data'
import React, { useState } from 'react'
import { FiltersDropdown, PriceRange } from '..'

import styles from './Filters.module.scss'

enum ViewType {
  normal = 'normal',
  mobile = 'mobile',
}

export interface IProps {
  readonly filters: string[]
  readonly viewType?: keyof typeof ViewType
  readonly className?: string
  readonly applyFilter?: () => void
}

export const Filters: React.FC<IProps> = ({ filters, className, applyFilter, viewType = ViewType.normal }) => {
  const initialState = {
    country: '',
    city: '',
    numberOfDays: '',
    accommodationStyle: '',
    styleOfTravel: '',
    priceRange: [100, 200],
  }

  const [state, setState] = useState(initialState)

  const renderFilters = () =>
    filters && (
      <div className={styles.filtersCheckboxes}>
        {filters.map((filter, index) => (
          <Checkbox className={styles.checkbox} key={index} label={filter} />
        ))}
      </div>
    )

  const handleChange = (value: any, key: string) => setState({ ...state, [key]: value })
  const resetFilters = () => setState(initialState)

  return (
    <div className={classNames(styles.filters, className)} data-view-type={viewType}>
      {viewType === ViewType.normal && <h4>Select country</h4>}
      <Select
        placeholder="Select country"
        className={styles.filtersSelect}
        options={[
          'Australia',
          'Dania',
          'Australia',
          'Iceland',
          'New Zeland',
          'Canada',
          'New Zeland',
          'Canada',
          'Dania',
          'Australia',
          'Iceland',
          'New Zeland',
          'Canada',
          'New Zeland',
          'Canada',
        ]}
        name="country"
        size="lg"
        value={state.country}
        onChange={handleChange}
      />
      {viewType === ViewType.normal ? (
        <>
          <h4>Select city</h4>
          {renderFilters()}{' '}
        </>
      ) : (
        <FiltersDropdown className={styles.filtersSelect} title="Select city">{renderFilters()}</FiltersDropdown>
      )}
      {viewType === ViewType.normal && <h4>Number of days</h4>}
      <Select
        placeholder="Select number of days"
        className={styles.filtersSelect}
        name="numberOfDays"
        options={numberOfDays}
        size="lg"
        value={state.numberOfDays}
        onChange={handleChange}
      />
      {viewType === ViewType.normal && <h4>Accomodation style</h4>}
      <Select
        placeholder="All accommodation style"
        className={styles.filtersSelect}
        name="accommodationStyle"
        size="lg"
        options={['Australia', 'Australia', 'Australia']}
        value={state.accommodationStyle}
        onChange={handleChange}
      />
      {viewType === ViewType.normal && <h4>Style of travel</h4>}
      <Select
        placeholder="Style of travel"
        className={styles.filtersSelect}
        name="styleOfTravel"
        size="lg"
        options={['Australia', 'Australia', 'Australia']}
        value={state.styleOfTravel}
        onChange={handleChange}
      />
      <PriceRange range={state.priceRange} onChange={handleChange} name="priceRange" />
      <div className={styles.filtersButtons}>
        {viewType === ViewType.mobile && (
          <Button onClick={applyFilter} theme="orange" form="rectangled" className={styles.apply} size="lg">
            Apply filter
          </Button>
        )}

        <Button
          theme="transparent"
          form="standart"
          onClick={resetFilters}
          size="sm"
          className={viewType === ViewType.mobile && styles.reset}
        >
          Reset filter
        </Button>
      </div>
    </div>
  )
}
