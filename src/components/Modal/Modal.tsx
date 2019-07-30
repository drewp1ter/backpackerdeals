import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import { isServer } from 'utils'
import styles from './Modal.module.scss'

enum Position {
  fixed = 'fixed',
  relative = 'relative',
}

export interface IProps {
  readonly isOpen: boolean
  readonly onClose?: () => void
  readonly className?: string
  readonly children: JSX.Element
  readonly position?: keyof typeof Position
}

export const Modal: React.FC<IProps> = ({ isOpen, onClose, className, children, position = Position.fixed }) => {
  let portal = null

  if (position === Position.relative && !isServer()) {
    portal = document.getElementById('modal-root')
  }

  const mask = <div className={styles.mask} data-visible={isOpen} onClick={onClose} />
  const icon = <i onClick={onClose} className={classNames(styles.close, 'fas fa-times')} />

  return (
    <div data-visible={isOpen} data-position={position} className={styles.modal}>
      <div className={classNames(styles.body, className)}>
        {position === Position.fixed ? (
          icon
        ) : (
          <div className={styles.iconContainer} onClick={onClose}>
            {icon}
          </div>
        )}
        {children}
      </div>
      {position === Position.fixed ? mask : portal && isOpen && ReactDOM.createPortal(mask, portal)}
    </div>
  )
}
