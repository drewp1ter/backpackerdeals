import classNames from 'classnames'
import React from 'react'
import { FaqCard } from '..'
import data from './data'

import styles from './FaqSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const FaqSection: React.FC<IProps> = ({ className }) => {
  const renderCards = () => data.map((card, idx) => <FaqCard key={idx} {...card} />)
  return (
    <div className={classNames(styles.faqSection, className)}>
      <div className={styles.head}>
        <h4>FAQ</h4>
        <p>
          Expand all
          <i className="fas fa-angle-double-down" />
        </p>
      </div>
      <ul>{renderCards()}</ul>
    </div>
  )
}
