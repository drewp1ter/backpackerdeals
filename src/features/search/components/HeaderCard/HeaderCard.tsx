import classNames from 'classnames'
import React from 'react'

import { Rating } from 'components'
import styles from './HeaderCard.module.scss'

export interface IProps {
  readonly title: string
  readonly description: string
  readonly body: string
  readonly rating: number
  readonly className?: string
}

export const HeaderCard: React.FC<IProps> = ({ title, description, body, rating, className }) => {

  return (
    <div className={classNames(styles.headerCard, className)}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{body}</p>
      <Rating className={styles.rating} rating={rating} />
    </div>
  )
}