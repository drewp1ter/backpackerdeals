import React, { useState } from 'react'

import classNames from 'classnames'

import { Button, ExposeTime, Modal } from 'components'
import { AddToWishlist, Sticker } from '..'
import flash from './assets/flash.svg'
import styles from './OrderDetails.module.scss'

export interface IProps {
  readonly className?: string
}

export const OrderDetails: React.FC<IProps> = ({ className }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  return (
    <div className={classNames(styles.orderDetails, className)}>
      <Modal isOpen={modalVisible} onClose={toggleModal}>
        <AddToWishlist className={styles.addToWishlist} />
      </Modal>
      <div className={styles.main}>
        <div className={styles.price}>
          <span>From</span>
          <h5>$1 369 AUD</h5>
        </div>
        <p>
          SAVE AUD $26
          <i className="fas fa-tag" />
        </p>
        <p>Value AUD $1 380</p>
        <div className={styles.childAndFamily}>
          <p>
            <strong>Child</strong>AUD $1 200
          </p>
          <p>
            <strong>Family</strong>AUD $1 900
          </p>
        </div>
        <p>Group discount info</p>
        <div className={styles.deal}>
          <Sticker variant="lastMinuteDeal" />
          <ExposeTime days="02" hours="10" minutes="51" size="md" className={styles.exposeTime} />
          <p className={styles.dealInfo}>Valid for travel between</p>
          <p className={styles.dealInfo}>04.03.2018 to 06.03.2018</p>
        </div>
        <p className={styles.instant}>
          <img src={flash} alt="" />
          <span>Instant confirmation</span>
        </p>
        <div className={styles.included}>
          <p>Park fees $25 included</p>
        </div>
        <Button className={styles.bookButton} form="rectangled" size="xl">
          <strong>BOOK NOW</strong>
        </Button>
        <p className={styles.aviableDate}>
          <i className="fas fa-calendar" />
          Next available date:<span>03/05/2019</span>
        </p>
      </div>
      <Button className={styles.button} form="rectangled" size="xl" theme="standart">
        <i className="fas fa-gift" />
        Buy as a gift or open dated
      </Button>
      <Button className={styles.button} onClick={toggleModal} form="rectangled" size="xl" theme="standart">
        <i className="fas fa-heart" />
        Add to Wishlist
      </Button>
      <p className={styles.share}>
        Share with friends:
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter" />
        <i className="fab fa-whatsapp" />
        <i className="far fa-envelope" />
      </p>
      <p className={styles.share}>@ E-mail me this deal</p>
    </div>
  )
}
