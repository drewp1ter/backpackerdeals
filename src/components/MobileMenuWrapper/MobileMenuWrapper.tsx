import * as React from 'react'

import classNames from 'classnames'

import styles from './MobileMenuWrapper.module.scss'

interface IProps {
  readonly open: boolean
  readonly children: JSX.Element
  readonly className?: string
}

export const MobileMenuWrapper: React.FC<IProps> = ({ open, children, className }) => (
  <div className={styles.mobileMenuWrapper}>
    <div className={styles.background} data-open={open} />
    <div className={classNames(styles.menu, className)} data-open={open}>
      {children}
    </div>
  </div>
)