import classNames from 'classnames'
import React from 'react'

import styles from './Modal.module.scss'

export interface IProps {
  readonly isOpen: boolean
  readonly onClose?: () => void
  readonly className?: string
  readonly children: JSX.Element
}

export const Modal: React.FC<IProps> = ({ isOpen, onClose, className, children }) => {
  return (
    <div data-visible={isOpen} className={styles.modal}>
      <div className={classNames(styles.body, className)}>
        <i onClick={onClose} className={classNames(styles.close, 'fas fa-times')} />
        {children}
      </div>
      <div className={styles.mask} onClick={onClose} />
    </div>
  )
}
