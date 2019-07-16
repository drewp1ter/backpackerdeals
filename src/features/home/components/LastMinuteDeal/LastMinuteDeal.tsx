import * as React from 'react'

import styles from './LastMinuteDeal.module.scss'

import { LastMinuteDealCard } from 'components'
import { circleScroll } from 'utils'

const data = [
  {
    img: require('./assets/1.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
    sale: '30% OFF',
    saleType: 'topDeal',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px"
  },
  {
    img: require('./assets/2.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
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
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px"
  },
  {
    img: require('./assets/3.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
    sale: '30% OFF',
    saleType: 'topDeal',
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px"
  },
  {
    img: require('./assets/4.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
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
    sizes: "(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px"
  },
]

export const LastMinuteDeal: React.FC = () => {
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(1140, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({ target, maxScrollLeft: 84, maxScrollRight: 2468, offsetLeft: 1230, offsetRight: 1141 })

  return (
    <ul ref={setStartPos} className={styles.lastMinuteDeal} onScroll={handleScroll}>
      {data.map((card, index) => (
        <LastMinuteDealCard view="vertical" {...card} key={`${index}-card`} />
      ))}
      {data.map((card, index) => (
        <LastMinuteDealCard view="vertical" {...card} key={`${index}-card`} className={styles.carousel} />
      ))}
      <LastMinuteDealCard view="vertical" {...data[0]} className={styles.carousel} />
    </ul>
  )
}
