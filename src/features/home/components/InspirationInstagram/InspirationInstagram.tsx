import * as React from 'react'
import classnames from 'classnames'

import { InstagramCard } from '..'
import styles from './inspirationInstagram.module.scss'

export interface IProps {
  className?: string
}

const InspirationInstagram: React.FC<IProps> = ({ className }) => {
  const mainClass = classnames(styles.main, className)
  return (
    <div className={mainClass}>
      <h1>Inspiration from our instagram</h1>
      <a>Follow us >></a>

      <div className={styles.cardsRow}>
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
      </div>
    </div>
  )
}

export default InspirationInstagram
