import classNames from 'classnames'
import React, { useState } from 'react'
import { FaqCard } from '..'
import data from './data'

import styles from './FaqSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const FaqSection: React.FC<IProps> = ({ className }) => {
  const [isExpanded, setIsExpanded] = useState<number>(0)
  const handleClickExpand = (value: number) => setIsExpanded(isExpanded ^ value)
  const handleToggleExpandAll = () => setIsExpanded(isExpanded ? 0 : -1)
  const renderCards = () =>
    data.map((card, idx) => <FaqCard isExpanded={isExpanded} onClickExpand={handleClickExpand} id={idx} key={idx} {...card} />)

  return (
    <div className={classNames(styles.faqSection, className)}>
      <div className={styles.head}>
        <h3>FAQ</h3>
        <p data-expanded={!!isExpanded} onClick={handleToggleExpandAll}>
          { isExpanded ? 'Collapse all' : 'Expand all' }
          <i className="fas fa-angle-double-down" />
        </p>
      </div>
      <ul>{renderCards()}</ul>
    </div>
  )
}
