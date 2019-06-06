import * as React from 'react'

import styles from './LastMinuteDeal.module.scss'

import { LastMinuteDealCard } from 'components'

import './assets/1.jpg'
import './assets/2.jpg'
import './assets/3.jpg'
import './assets/4.jpg'

const data = [
  {
    img: require('./assets/1.jpg?webp'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
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
    img: require('./assets/2.jpg?webp'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
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
    img: require('./assets/3.jpg?webp'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
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
    img: require('./assets/4.jpg?webp'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
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

export const LastMinuteDeal: React.FC = () => (
  <div className={styles.lastMinuteDeal}>
    {data.map((card, index) => (
      <LastMinuteDealCard view="vertical" {...card} key={`${index}-card`} />
    ))}
  </div>
)
