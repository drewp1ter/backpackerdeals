import classNames from 'classnames'
import React, { useState } from 'react'

import { Modal } from 'components'
import styles from './FaqCard.module.scss'

export interface IProps {
  readonly text: string
  readonly title: string
  readonly preview: string
  readonly className?: string
}

export const FaqCard: React.FC<IProps> = ({ preview, title, text, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <div className={classNames(styles.faqCard, className)}>
      <Modal isOpen={isOpen} onClose={toggleIsOpen} position="relative" className={styles.modal}>
        <>
          <h6>{title}</h6>
          <p>{text}</p>
        </>
      </Modal>
      <p>{preview}</p>
      <div className={styles.add} onClick={toggleIsOpen} />
    </div>
  )
}
