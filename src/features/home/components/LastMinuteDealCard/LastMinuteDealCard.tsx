import * as React from 'react'

import './LastMinuteDealCard.scss'

import TopDeal from './assets/Badge.svg'
import MostPopular from './assets/Most popular.svg'

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
    let starsArray: React.ReactNode[] = []

    for (let i: number = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        starsArray.push(<i key={i} className="fas fa-star filled" />)
      } else {
        starsArray.push(<i key={i} className="far fa-star unfilled" />)
      }
    }

    return starsArray
  }

  return (
    <div className="last-minute-deal-card">
      <div className="image-block">
        {saleType === 'topDeal' && <img className="badge" src={TopDeal} alt="Top Deal" />}
        {saleType === 'mostPopular' && <img className="badge" src={MostPopular} alt="Most Popular" />}
        <div className="sale">
          <p>{sale}</p>
        </div>
        <div className="expose-time">
          <div className="days-block">
            <p>{exposeTime.hours}</p>
            <p className="time-name">Days</p>
          </div>
          <p className="colon">:</p>
          <div className="hours-block">
            <p>{exposeTime.hours}</p>
            <p className="time-name">Hours</p>
          </div>
          <p className="colon">:</p>
          <div className="minutes-block">
            <p>{exposeTime.minutes}</p>
            <p className="time-name">Minutes</p>
          </div>
        </div>
        <img src={img} alt="Last Minute Deal Tour" />
      </div>

      <div className="card-description">
        <div className="rating-and-location">
          <div className="stars">
            {renderStars()}
            <span>{rating} from 5</span>
          </div>
          <div className="country">
            <i className="fas fa-map-marker-alt" />
            <span>{country}</span>
          </div>
        </div>

        <p className="tour">{tourName}</p>
        <p className="duration">{duration}</p>

        <div className="value-and-link">
          <div className="total-price">
            <span className="from">From</span>
            <p className="price">${price} AUD</p>
            <span className="value">Value AUD{value}</span>
          </div>

          <button>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  )
}
