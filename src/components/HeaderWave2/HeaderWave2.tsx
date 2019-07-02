import classNames from 'classnames'
import React from 'react'

import styles from './HeaderWave2.module.scss'

export interface IProps {
  readonly children: JSX.Element | JSX.Element[]
  readonly className: string
  readonly maskClassName?: string,
  readonly hasGradient?: boolean
}

export const HeaderWave2: React.FC<IProps> = ({ children, className, maskClassName, hasGradient = true }) => (
  <section className={classNames(styles.headWave2, className)}>
    <div className={styles.children}>
      {children}
    </div>
    <div className={classNames(styles.mask, maskClassName)} />
    {hasGradient && <div className={styles.gradient} />}
  </section>
)