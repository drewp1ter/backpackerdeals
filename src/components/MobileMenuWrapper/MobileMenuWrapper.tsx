import classNames from 'classnames'
import React from 'react'

import styles from './MobileMenuWrapper.module.scss'

interface IProps {
  readonly open: boolean
  readonly children: JSX.Element
  readonly className?: string
  readonly bodyClassName?: string
}

export const MobileMenuWrapper: React.FC<IProps> = ({ open, children, className, bodyClassName }) => (
  <div className={classNames(styles.mobileMenuWrapper, className)}>
    <div className={styles.background} data-open={open} />
    <div className={classNames(styles.menu, bodyClassName)} data-open={open}>
      {children}
    </div>
  </div>
)