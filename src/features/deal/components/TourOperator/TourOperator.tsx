import classNames from 'classnames'
import React from 'react'

import image from './assets/image_85.jpg'
import styles from './TourOperator.module.scss'

export interface IProps {
  readonly className?: string
}

export const TourOperator: React.FC<IProps> = ({ className }) => {
  return (
    <section className={classNames(styles.tourOperator, className)}>
      <h3>Tour Operator</h3>
      <div className={styles.content}>
        <div className={styles.iframeWrapper}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9050548.165515205!2d129.49759360932202!3d-26.17454032372351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b32194a62bd9563%3A0xe3e1402ed4be27f2!2sWayoutback+Australian+Safaris!5e0!3m2!1sru!2sru!4v1565043312088!5m2!1sru!2sru" />
        </div>
        <div className={styles.card}>
          <h4>Tour Operator</h4>
          <div className={styles.img}>
            <img src={image} alt="" />
          </div>
          <h4>Wayoutback Australian Safaris</h4>
          <p>704 Tomoana RD, Mahora, Hastings 41 120, Australia</p>
        </div>
      </div>
    </section>
  )
}
