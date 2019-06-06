import React from 'react'
import classNames from 'classnames'

import styles from './HeaderWave.module.scss'

export interface IProps {
  readonly children: JSX.Element | JSX.Element[]
  readonly className: string
}

export const HeaderWave: React.FC<IProps> = ({ children, className }) => (
  <section className={classNames(styles.headWave, className)}>
    <div className={styles.children}>
      {children}
    </div>
    <div className={styles.mask} />
    <div className={styles.gradient} />
  </section>
)