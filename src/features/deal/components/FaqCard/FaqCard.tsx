import classNames from 'classnames'
import React from 'react'

import styles from './FaqCard.module.scss'

export interface IProps {
  readonly text: string
  readonly className?: string
}

export const FaqCard: React.FC<IProps> = ({ text, className }) => {
  return (
    <div className={classNames(styles.faqCard, className)}>
      <p>{text}</p>
      <div className={styles.add} />
    </div>
  )
}
