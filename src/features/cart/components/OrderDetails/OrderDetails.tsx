import classNames from 'classnames'
import { Select } from 'components/Select'
import React from 'react'
import { confidenceImages, contactsList } from './assets'
import image from './assets/image.jpg'
import styles from './OrderDetails.module.scss'

export interface IProps {
  readonly className?: string
}

export const OrderDetails: React.FC<IProps> = ({ className }) => {

  const renderConfidenceImages = (item: any) => (
    <>
      <div className={styles.confidenceIcon}><img src={item.img} alt=""/></div>
      <div className={styles.confidenceText} dangerouslySetInnerHTML={{__html: item.html}} />
    </>
  )

  const renderHelpContact = (item: any) => (
    <>
      <i className={item.icon} />
      <span>{item.title}</span>
      <span className={styles.helpContact}>{item.contact}</span>
    </>
  )

  return (
    <div className={className}>
      <div className={styles.orderDetail}>
        <img src={image} alt=""/>

        <div className={styles.orderDetailInner}>

          <h5>Alice Springs to Alice
            Springs Uluru Tour -
            3 Days 2 Nights</h5>

          <div className={styles.locationsSection}>
            <p>
              <span>Start location: Alice Springs</span>
              <span>Start: Mar 15 2019, 07:00 AM</span>
            </p>
            <p>
              <span>Finish location: Alice Springs </span>
              <span>Finish: Mar 17 2019,  07:00 AM</span>
            </p>

            <button className={styles.orderEditBtn}>
              <i className="fa fa-edit"/>Change date & time
            </button>
          </div>

          <div className={styles.shopsSection}>
            <div className={styles.orderItem}>
              <b>Adult</b>
              <span>x8</span>
              <span>AUD $1 200</span>
            </div>

            <div className={styles.orderItemInfo}>
              <span>4 Adults</span>
              <span>AUD $1 000</span>
            </div>
            <div className={styles.orderItemInfo}>
              <span>3 Adults</span>
              <span>AUD $1 200</span>
            </div>
            <div className={styles.orderItemInfo}>
              <span>1 Adults</span>
              <span>AUD $1 400</span>
            </div>

            <div className={styles.orderItem}>
              <b>Child</b>
              <span>x3</span>
              <span>AUD $900</span>
            </div>

            <div className={styles.orderItem}>
              <b>Family</b>
              <span>x1</span>
              <span>AUD $1 400</span>
            </div>

            <div className={classNames(styles.orderTotalAmount, styles.orderItem)}>
              <b>Total Amount</b>
              <span>AUD $10 400</span>
            </div>
          </div>

          <div className={styles.additionalOptionsSection}>
            <div className={styles.orderItem}>
              <b>Additional options</b>
            </div>

            <div className={classNames(styles.orderItemInfo, styles.orderDisabled)}>
              <span>Sleeping bag hire </span>
              <Select size="md" className={styles.select} options={[0, 1, 2, 4, 5, 6, 7].map(toString)} value={'0'}/>
              <span>AUD $ 20</span>
            </div>

            <div className={styles.orderItemInfo}>
              <span>Camel farm ride</span>
              <Select size="md" className={styles.select} options={[0, 1, 2, 4, 5, 6, 7]} value={1}/>
              <span>AUD $ 5</span>
            </div>

            <div className={classNames(styles.orderTotalAmount, styles.orderItem)}>
              <b>Total Amount</b>
              <span>AUD $ 5</span>
            </div>
          </div>

          <div className={styles.couponSection}>
            <p>
              Do you have a coupon code?
            </p>

            <span className={styles.couponSave}>Save aud $26<i className="fas fa-tag" /></span>
            <span className={styles.couponAmount}>$1 369 AUD</span>
            <span className={styles.couponInfo}>Total Amount Due</span>
            <span className={styles.couponInfoSmall}>(including additional options)</span>
          </div>
        </div>
      </div>

      <div className={styles.confidenceSection}>
        <h5>Book with confidence</h5>
        <div className={styles.confidenceImages}>
          {confidenceImages.map(renderConfidenceImages)}
        </div>
      </div>

      <div className={styles.nextStepSection}>
        <h6>What happens next?</h6>
        <div className={styles.nextStepList}>
          <i className='fas fa-envelope' />
          <span>Receive email of your confirmation and voucher</span>
          <i className='fas fa-file-alt' />
          <span>Present it to the merchant</span>
        </div>
      </div>


      <div className={styles.helpSection}>
        <h6>Need help to complete this booking? Call us on</h6>
        <div className={styles.helpContactsList}>
          {contactsList.map(renderHelpContact)}
        </div>
      </div>
    </div>
  )
}
