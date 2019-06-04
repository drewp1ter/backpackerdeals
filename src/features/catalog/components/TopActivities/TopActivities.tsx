import * as React from 'react'

import styles from './TopActivities.module.scss'

import { LastMinuteDealCard } from 'components'

import Picture1 from './assets/picture1.png'
import Picture2 from './assets/picture2.png'
import Picture3 from './assets/picture3.png'

const data = [
  {
    img: Picture1,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: '30%',
    saleType: 'topDeal',
    likeable: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5
  },
  {
    img: Picture2,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: 'AUD$300',
    saleType: '',
    likeable: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    }
  },
  {
    img: Picture3,
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: '30%',
    saleType: 'topDeal',
    likeable: true,
    sellOut: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5
  }
]

export const TopActivities: React.FC = () => (
  <div className={styles.topActivities}>
    {data.map((card, index) => (
      <LastMinuteDealCard view="reversed" {...card} key={`${index}-card`} />
    ))}
  </div>
)