import * as React from 'react'

import styles from './TopActivities.module.scss'

import { LastMinuteDealCard } from 'components'

const data = [
  {
    img: require('./assets/picture1.png?resize&sizes[]=232&sizes[]=256&sizes[]=496&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: '30%',
    saleType: 'topDeal',
    likeable: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1280px) 256px, 496px"
  },
  {
    img: require('./assets/picture2.png?resize&sizes[]=232&sizes[]=256&sizes[]=496&sizes[]=272'),
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
    },
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1280px) 256px, 496px"
  },
  {
    img: require('./assets/picture3.png?resize&sizes[]=232&sizes[]=256&sizes[]=496&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: '30%',
    saleType: 'topDeal',
    likeable: true,
    sellOut: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1280px) 256px, 496px"
  },
]

export const TopActivities: React.FC = () => (
  <div className={styles.topActivities}>
    <h2>Top 3 Activities in Australia</h2>

    <div className={styles.cards}>
      {data.map((card, index) => (
        <LastMinuteDealCard view="reversed" {...card} key={`${index}-card`} />
      ))}
    </div>
  </div>
)
