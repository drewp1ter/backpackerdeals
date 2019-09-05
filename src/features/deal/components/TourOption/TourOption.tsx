import classNames from 'classnames'
import React, { useState } from 'react'

import { Button } from 'components'
import styles from './TourOption.module.scss'

export interface IProps {
  readonly className?: string
  readonly body: string
}

export interface IState {
  readonly isAnimated: boolean
  readonly isExpanded: boolean
}

export const TourOption: React.FC<IProps> = ({ className, body }) => {
  const [state, setState] = useState<IState>({ isAnimated: false, isExpanded: false })
  const { isAnimated, isExpanded } = state
  const maxLength = 230
  const isOverflow = body!.length > maxLength
  const text = isOverflow && !isAnimated && !isExpanded ? body.slice(0, body!.indexOf(' ', maxLength)) + '…' : body

  const handleClick = () => {
    if (isExpanded) {
      setState({ isExpanded: false, isAnimated: true })
      setTimeout(() => setState({ ...state, isExpanded: false }), 800)
    } else {
      setState({ ...state, isExpanded: true })
    }
  }

  return (
    <div className={classNames(styles.tourOption, className)}>
      <div className={styles.text}>
        <h4>3 Days Tassie Magic - Launceston to Hobart - Hostel Dorm</h4>
        <p data-expanded={isExpanded}>
          {text}
          {isOverflow && (
            <span className={styles.expand} onClick={handleClick}>
              {isExpanded ? 'Collapse' : 'Expand'}
              <i className="fas fa-angle-double-down" />
            </span>
          )}
        </p>
      </div>
      <div className={styles.price}>
        <h3>$1 369 AUD</h3>
        <p>SAVE AUD $26</p>
        <p>Value AUD $1 380</p>
      </div>
      <div className={styles.aviability}>
        <p><i className="fas fa-calendar" />Next available date:</p>
        <p>03/05/2019</p>
        <Button>Check Availability</Button>
      </div>
    </div>
  )
}
