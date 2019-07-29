import classNames from 'classnames'
import React from 'react'

import styles from './RelatedTravelBlogs.module.scss'

import { TravelCard } from '..'
import { cards } from './data'

export interface IProps {
  readonly className?: string
}

export const RelatedTravelBlogs: React.FC<IProps> = ({ className }) => {
  const renderCards = () => cards.map((card, idx) => <TravelCard key={idx} {...card} />)

  return (
    <div className={classNames(styles.relatedTravelBlogs, className)}>
      <h4>Related Travel Blogs</h4>
      <ul>{renderCards()}</ul>
    </div>
  )
}
