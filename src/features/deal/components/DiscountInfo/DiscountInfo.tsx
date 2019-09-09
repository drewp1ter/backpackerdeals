import classNames from 'classnames'
import React from 'react'

import { Button } from 'components'
import * as images from './assets'
import styles from './DiscountInfo.module.scss'

export interface IProps {
  readonly className?: string
}

export const DiscountInfo: React.FC<IProps> = ({ className }) => {
  return (
    <section className={classNames(styles.discountInfo, className)}>
      <h4>Alice Springs to Alice Springs Uluru Tour - 3 Days 2 Nights</h4>
      <h4>Group Pricing</h4>
      <ul>
        <li>
          <span>2 to 5 people</span>
          <div>
            <img src={images.i3} alt="3" />
            <b>AUD $100</b>
            <span>Per person</span>
          </div>
        </li>
        <li>
          <span>6 to 10</span>
          <div>
            <img src={images.i6} alt="6" />
            <b>-5 %</b>
            <span>Per person</span>
          </div>
        </li>
        <li>
          <span>> 10 people</span>
          <div>
            <img src={images.i10} alt="10" />
            <b>AUD $175</b>
            <span>Per person</span>
          </div>
        </li>
      </ul>
      <Button className={styles.button} size="md">Check Availability</Button>
    </section>
  )
}
