import classNames from 'classnames'
import React, { useState } from 'react'

import { Button, Select } from 'components'
import { Checkbox } from '..'
import styles from './Filter.module.scss'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly rating: string
  readonly checkBoxes: number
}

enum CheckBoxes {
  tour = 1,
  trip = 2,
  guide = 4,
  hiking = 8,
  people = 16,
  food = 32,
}

export const Filter: React.FC<IProps> = ({ className }) => {
  const initialState: IState = {
    rating: '',
    checkBoxes: 0,
  }

  const [state, setState] = useState<IState>(initialState)
  const { rating, checkBoxes } = state
  const handleClick = (value: number = 0) => setState({ ...state, checkBoxes: checkBoxes ^ value })
  const handleChange = (value: string) => setState({...state, rating: value})

  return (
    <div className={classNames(styles.filter, className)}>
      <div className={styles.header}>
        <h4>Filter</h4>
        <Button form="rectangled" size="md">Write a review</Button>
      </div>

      <div className={styles.controls}>
        <Select className={styles.select} value={rating} onChange={handleChange} placeholder="Rating" options={['1', '2', '3', '4', '5']} size="lg" />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.tour}
          value={CheckBoxes.tour}
          placeholder="Tour"
        />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.trip}
          value={CheckBoxes.trip}
          placeholder="Trip"
        />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.guide}
          value={CheckBoxes.guide}
          placeholder="Guide"
        />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.hiking}
          value={CheckBoxes.hiking}
          placeholder="Hiking"
        />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.people}
          value={CheckBoxes.people}
          placeholder="People"
        />
        <Checkbox
          className={styles.checkbox}
          onClick={handleClick}
          checked={checkBoxes & CheckBoxes.food}
          value={CheckBoxes.food}
          placeholder="Food"
        />
        <Checkbox
          className={styles.ellipsis}
          placeholder="..."
        />
      </div>
    </div>
  )
}
