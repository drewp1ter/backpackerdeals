import * as React from 'react'
import classNames from 'classnames'

import { Icon } from 'components/base'
import styles from './LastMinuteDealCard.module.scss'

interface IExposeTime {
  days: string
  hours: string
  minutes: string
}

interface IProps {
  readonly img: string
  readonly tourName: string
  readonly price: number
  readonly country: string
  readonly sale: string
  readonly saleType: string
  readonly value: number
  readonly duration: string
  readonly rating: number
  readonly exposeTime: IExposeTime
}

export const LastMinuteDealCard: React.FC<IProps> = ({
  img,
  tourName,
  rating,
  price,
  country,
  sale,
  duration,
  value,
  saleType,
  exposeTime,
}) => {
  const renderStars = () => {
    // tslint:disable-next-line:prefer-const
    let starsArray: React.ReactNode[] = []

    for (let i: number = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        starsArray.push(<i key={i} className={classNames('fas fa-star', styles.filled)} />)
      } else {
        starsArray.push(<i key={i} className={classNames('far fa-star', styles.unfilled)} />)
      }
    }

    return starsArray
  }

  return (
    <div className={styles.lastMinuteDealCard}>
      <div className={styles.imageBlock}>
        {saleType === 'topDeal' && <Icon className={styles.badge} name="topDeal" alt="Top Deal" />}
        {saleType === 'mostPopular' && <Icon className={styles.badge} name="mostPopular" alt="Most Popular" />}
        <div className={styles.sale}>
          <p>{sale}</p>
        </div>
        <div className={styles.exposeTime}>
          <div className={styles.daysBlock}>
            <p>{exposeTime.hours}</p>
            <p className={styles.timeName}>Days</p>
          </div>
          <p className={styles.colon}>:</p>
          <div className={styles.hoursBlock}>
            <p>{exposeTime.hours}</p>
            <p className={styles.timeName}>Hours</p>
          </div>
          <p className={styles.colon}>:</p>
          <div className={styles.minutesBlock}>
            <p>{exposeTime.minutes}</p>
            <p className={styles.timeName}>Minutes</p>
          </div>
        </div>
        <img src={img} alt="Last Minute Deal Tour" />
      </div>

      <div className={styles.cardDescription}>
        <div className={styles.ratingAndLocation}>
          <div className={styles.stars}>
            {renderStars()}
            <span>{rating} from 5</span>
          </div>
          <div className={styles.country}>
            <i className="fas fa-map-marker-alt" />
            <span>{country}</span>
          </div>
        </div>

        <p className={styles.tour}>{tourName}</p>
        <p className={styles.duration}>{duration}</p>

        <div className={styles.valueAndLink}>
          <div className={styles.totalPrice}>
            <span className={styles.from}>From</span>
            <p className={styles.price}>${price} AUD</p>
            <span className={styles.value}>Value AUD{value}</span>
          </div>

          <button>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
