import * as React from 'react'

import './LastMinuteDeal.scss'

import { LastMinuteDealCard } from '../LastMinuteDealCard'

import Picture1 from './assets/1.jpg'
import Picture2 from './assets/2.jpg'
import Picture3 from './assets/3.jpg'
import Picture4 from './assets/4.jpg'

interface IProps {}

const data = [
  {
    img: Picture1,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    country: 'Australia',
    sale: '30%',
    saleType: 'topDeal',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
  },
  {
    img: Picture2,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    country: 'Australia',
    sale: 'AUD$300',
    saleType: '',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
  },
  {
    img: Picture3,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    country: 'Australia',
    sale: '30%',
    saleType: 'topDeal',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
  },
  {
    img: Picture4,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    country: 'Australia',
    sale: 'AUD$300',
    saleType: 'mostPopular',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
  },
]

export const LastMinuteDeal: React.FC<IProps> = () => (
  <div className="last-minute-deal">
    {data.map((card, index) => (
      <LastMinuteDealCard {...card} key={`${index}-card`} />
    ))}
  </div>
)
