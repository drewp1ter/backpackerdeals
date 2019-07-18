import * as React from 'react'

import classNames from 'classnames'

import { Icon, Rating } from 'components'
import LazyLoad from 'react-lazyload'
import styles from './LastMinuteDealCard.module.scss'

interface IExposeTime {
  days: string
  hours: string
  minutes: string
}

enum View {
  vertical = 'vertical',
  reversed = 'reversed',
  horizontal = 'horizontal',
}

interface IProps {
  readonly view: keyof typeof View
  readonly img: any
  readonly tourName: string
  readonly price: number
  readonly location: string
  readonly sale: string
  readonly saleType: string
  readonly sellOut?: boolean
  readonly likeable?: 'wide' | 'short'
  readonly value: number
  readonly duration: string
  readonly rating: number
  readonly exposeTime?: IExposeTime
  readonly description?: string
  readonly className?: string
  readonly sizes: string
}

export const LastMinuteDealCard: React.FC<IProps> = ({
  view,
  img,
  tourName,
  rating,
  price,
  location,
  sale,
  sellOut,
  likeable,
  duration,
  value,
  saleType,
  exposeTime,
  description,
  className,
  sizes,
}) => {
  return (
    <li data-view={view} className={classNames(styles.lastMinuteDealCard, className)}>
      <div className={styles.imageBlock}>
        {saleType === 'topDeal' && <Icon className={styles.badge} name="topDeal" alt="Top Deal" />}
        {saleType === 'mostPopular' && <Icon className={styles.badge} name="mostPopular" alt="Most Popular" />}
        {sellOut && <div className={styles.sellOut}>SELL OUT</div>}
        {likeable && <i className={classNames('fas fa-heart', styles.like)} data-type={likeable} />}
        <div className={styles.sale}>
          <p>{sale}</p>
        </div>
        {exposeTime && (
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
        )}
        <LazyLoad offset={400}>
          <img className={styles.background} srcSet={img.srcSet} sizes={sizes} src={img.src} alt="Last Minute Deal Tour" />
        </LazyLoad>
      </div>

      <div data-view={view} className={styles.cardDescription}>
        {view === View.vertical && (
          <>
            <div className={styles.aboutPlace}>
              <Rating className={styles.rating} rating={rating} />
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt" />
                <span>{location}</span>
              </div>
            </div>

            <h3 data-view={view} className={styles.tour}>
              {tourName}
            </h3>
            <p className={styles.duration}>{duration}</p>
          </>
        )}

        {(view === View.reversed || view === View.horizontal) && (
          <div data-view={view}>
            <div className={styles.aboutPlace}>
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt" />
                <span>{location}</span>
              </div>
              <div className={styles.duration}>
                <i className="far fa-clock" />
                {duration}
              </div>
            </div>

            <h3 className={styles.tour}>{tourName}</h3>
            <Rating className={styles.rating} rating={rating} />
            {view === View.horizontal && <p className={styles.description}>{description}</p>}
          </div>
        )}

        <div className={styles.valueAndLink}>
          <div className={styles.totalPrice}>
            <span className={styles.from}>From</span>
            <p className={styles.price}>${price} AUD</p>
            <span className={styles.value}>Value AUD{value}</span>
          </div>

          <button aria-label="->">
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </li>
  )
}
