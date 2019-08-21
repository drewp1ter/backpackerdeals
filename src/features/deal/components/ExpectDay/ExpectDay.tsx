import classNames from 'classnames'
import React from 'react'

import styles from './ExpectDay.module.scss'

export interface IProps {
  readonly day: number
  readonly className?: string
  readonly body: string
  readonly isExpanded: number
  readonly isAnimated: number
  readonly onClick: (value: number) => void
}

export const ExpectDay: React.FC<IProps> = ({ day, isExpanded, isAnimated, className, onClick, body }) => {
  const maxLength = 288
  const value = Math.pow(2, day - 1)
  const isOverflow = body!.length > maxLength
  const text = isOverflow && !(isAnimated & value) && !(isExpanded & value) ? body.slice(0, body!.indexOf(' ', maxLength)) + '…' : body

  const handleClick = () => onClick(value)

  return (
    <div className={classNames(styles.expectDay, className)}>
      <div className={styles.left}>
        <div className={styles.day}>
          <b>{day}</b>
          <b>DAY</b>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.right}>
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
        <p data-expanded={!!(isExpanded & value)}>
          {text}
          {isOverflow && (
            <span className={styles.expand} onClick={handleClick}>
              {!!(isExpanded & value) ? 'Collapse' : 'Expand'}
              <i className="fas fa-angle-double-down" />
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
