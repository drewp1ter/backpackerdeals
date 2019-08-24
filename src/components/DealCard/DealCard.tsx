import * as React from 'react'

import classNames from 'classnames'

import { ExposeTime, Icon, Rating } from 'components'
import LazyLoad from 'react-lazyload'
import styles from './DealCard.module.scss'

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

enum SaleType {
  topDeal = 'topDeal',
  mostPopular = 'mostPopular'
}

export interface IProps {
  readonly view?: keyof typeof View
  readonly img: any
  readonly tourName: string
  readonly price: number
  readonly location: string
  readonly sale: string
  readonly saleType?: keyof typeof SaleType
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

export const DealCard: React.FC<IProps> = ({
  view = View.vertical,
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
    <li data-view={view} className={classNames(styles.dealCard, className)}>
      <div className={styles.imageBlock}>
        {saleType === SaleType.topDeal && <Icon className={styles.badge} name={SaleType.topDeal} alt="Top Deal" />}
        {saleType === SaleType.mostPopular && <Icon className={styles.badge} name={SaleType.mostPopular} alt="Most Popular" />}
        {sellOut && <div className={styles.sellOut}>SELL OUT</div>}
        {likeable && <i className={classNames('fas fa-heart', styles.like)} data-type={likeable} />}
        <div className={styles.sale}>
          <p>{sale}</p>
        </div>
        {exposeTime && <ExposeTime {...exposeTime} className={styles.exposeTime} size="lg" />}
        <LazyLoad offset={400}>
          <img className={styles.background} srcSet={img.srcSet} sizes={sizes} src={img.src} alt="Last Minute Deal Tour" />
        </LazyLoad>
      </div>

      <div data-view={view} className={styles.cardDescription}>
        {view === View.vertical && (
          <>
            <div className={styles.aboutPlace}>
              <Rating className={styles.rating} value={rating} detail={true} />
              <div className={styles.location}>
                <i className="fas fa-map-marker-alt" />
                <span>{location}</span>
              </div>
            </div>

            <h3 className={styles.tour}>
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
            <Rating className={styles.rating} value={rating} detail={true} />
            {view === View.horizontal && <p className={styles.description}>{description}</p>}
          </div>
        )}

        <div className={styles.valueAndLink}>
          <div className={styles.totalPrice}>
            <span className={styles.from}>From</span>
            <p className={styles.price}>AUD ${price}</p>
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
