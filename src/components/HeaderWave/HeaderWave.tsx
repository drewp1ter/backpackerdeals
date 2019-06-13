import classNames from 'classnames'
import React from 'react'

import styles from './HeaderWave.module.scss'

export interface IProps {
  readonly children: JSX.Element | JSX.Element[]
  readonly className: string
  readonly maskClassName?: string
}

export const HeaderWave: React.FC<IProps> = ({ children, className, maskClassName }) => (
  <section className={classNames(styles.headWave, className)}>
    <div className={styles.children}>
      {children}
    </div>
    <div className={classNames(styles.mask, maskClassName)} />
    <div className={styles.gradient} />
  </section>
)