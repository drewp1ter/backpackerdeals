import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './ExpectDay.module.scss'

export interface IProps {
  readonly day: number
  readonly className?: string
  readonly body: string
}

export const ExpectDay: React.FC<IProps> = ({ day, className, body }) => {
  const maxLength = 288
  const [isExpanded, setExpanded] = useState<boolean>(false)
  const [isAnimated, setAnimation] = useState<boolean>(false)
  const isOverflow = body!.length > maxLength
  const text = isOverflow && !isAnimated && !isExpanded ? body.slice(0, body!.indexOf(' ', maxLength)) + '…' : body

  const handleClick = () => {
    if (isExpanded) {
      setAnimation(true)
      setTimeout(() => setAnimation(false), 800)
    }
    setExpanded(!isExpanded)
  }

  return (
    <div className={classNames(styles.expectDay, className)}>
      <div className={styles.dayHeader}>
        <div className={styles.day}>
          <b>{day}</b>
          <b>DAY</b>
        </div>
        <div className={styles.info}>
          <h5>Darvin-kakadu</h5>
          <div>
            <span>
              <i className="fas fa-map-marker-alt" />
              Darwin
            </span>
            <span>
              <i className="far fa-clock" />
              Pick-up at 7:00 AM
            </span>
            <span>
              <i className="fas fa-bus" />8 hours ride
            </span>
            <span>
              <i className="fas fa-walking" />7 km, hiking
            </span>
            <span>
              <i className="fas fa-utensils" />
              BBQ Dinner
            </span>
          </div>
        </div>
      </div>
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
  )
}
