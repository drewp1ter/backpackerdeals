import classNames from 'classnames'
import React, { useState } from 'react'

import { Modal } from 'components'
import styles from './FaqCard.module.scss'

export interface IProps {
  readonly text: string
  readonly title: string
  readonly preview: string
  readonly className?: string
  readonly id: number
  readonly isExpanded?: number
  readonly onClickExpand?: (value: number) => void
}

export interface IState {
  readonly isOpenModal: boolean
  readonly isExpanded: boolean
}

export const FaqCard: React.FC<IProps> = ({ id, preview, title, text, className, isExpanded = 0, onClickExpand }) => {
  const value = Math.pow(2, id)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleClickExpand = () => onClickExpand && onClickExpand(value)

  return (
    <div className={classNames(styles.faqCard, className)} data-expanded={!!(isExpanded & value)}>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} position="relative" className={styles.modal}>
        <>
          <h6>{title}</h6>
          <p>{text}</p>
        </>
      </Modal>
      <p>{preview}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttonModal} onClick={handleOpenModal} />
      <div className={styles.buttonExpand} onClick={handleClickExpand} />
    </div>
  )
}
