import React from 'react'

import styles from './RelatedTravelBlogs.module.scss'

import { TravelCard } from '..'
import { cards } from './data'

export const RelatedTravelBlogs: React.FC = () => {

  const renderCards = () => cards.map((card, idx) => <TravelCard key={idx} {...card} />)

  return (
    <div className={styles.relatedTravelBlogs}>
      <h4>Related Travel Blogs</h4>
      <ul>
        {renderCards()}
      </ul>
    </div>
  )
}