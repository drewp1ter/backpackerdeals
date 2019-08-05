import moment from 'moment'
import React from 'react'

import styles from './Comment.module.scss'

export interface IProps {
  readonly author: string
  readonly date: Date
  readonly body: string
}

export const Comment: React.FC<IProps> = ({ author, date, body }) => {

  return (
    <div className={styles.comment}>
      <h6>{author}</h6>
      <p>{moment(date).format('DD.MM.YYYY')}</p>
      <p>{body}</p>
    </div>
  )
}