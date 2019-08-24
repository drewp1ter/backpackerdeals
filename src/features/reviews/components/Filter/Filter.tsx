import classNames from 'classnames'
import React, { useState } from 'react'

import { Button, Rating, Select } from 'components'
import { Checkbox } from '..'
import styles from './Filter.module.scss'
import labels from './labels'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly rating: string
  readonly checkBoxes: number
  readonly showAllFilters: boolean
}

export const Filter: React.FC<IProps> = ({ className }) => {
  const [state, setState] = useState<IState>({
    rating: '',
    checkBoxes: 0,
    showAllFilters: false,
  })

  const { rating, checkBoxes, showAllFilters } = state
  const handleClick = (value: number = 0) => setState({ ...state, checkBoxes: checkBoxes ^ value })
  const handleChange = (value: string) => setState({ ...state, rating: value })
  const handleClickAllFilters = () => setState({ ...state, showAllFilters: true })

  const renderCheckBoxes = () =>
    labels.map((label, idx) => {
      const value = Math.pow(2, idx)
      return (
        <Checkbox
          key={idx}
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & value}
          value={value}
          placeholder={label}
        />
      )
    })

  return (
    <div className={classNames(styles.filter, className)}>
      <div className={styles.header}>
        <h4>Filter</h4>
        <Button form="rectangled" size="md">
          Write a review
        </Button>
      </div>

      <div data-show-all={showAllFilters} className={styles.controls}>
        <Select
          className={styles.select}
          value={rating}
          onChange={handleChange}
          placeholder="Rating"
          options={[
            'All',
            <Rating key={1} value={5} />,
            <Rating key={2} value={4} />,
            <Rating key={3} value={3} />,
            <Rating key={4} value={2} />,
            <Rating key={5} value={1} />,
          ]}
          size="lg"
        />
        {renderCheckBoxes()}
        <Checkbox onClick={handleClickAllFilters} className={styles.ellipsis} placeholder="..." />
      </div>
    </div>
  )
}
