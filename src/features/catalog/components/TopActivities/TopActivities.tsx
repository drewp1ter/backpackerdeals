import * as React from 'react'

import styles from './TopActivities.module.scss'

import { LastMinuteDealCard } from 'components'
import { circleScroll } from 'utils'

const data = [
  {
    img: require('./assets/picture1.png?resize&sizes[]=272&sizes[]=312&sizes[]=356&sizes[]=496'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia, Sydney',
    sale: '30%',
    saleType: 'topDeal',
    likeable: true,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    sizes: "(max-width: 900px) 272px, (max-width: 1024px) 312px, (max-width: 1280px) 356px, 496px"
  },
  {
    img: require('./assets/picture2.png?resize&sizes[]=272&sizes[]=312&sizes[]=356&sizes[]=496'),
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
    sizes: "(max-width: 900px) 272px, (max-width: 1024px) 312px, (max-width: 1280px) 356px, 496px"
  },
  {
    img: require('./assets/picture3.png?resize&sizes[]=272&sizes[]=312&sizes[]=356&sizes[]=496'),
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
    sizes: "(max-width: 900px) 272px, (max-width: 1024px) 312px, (max-width: 1280px) 356px, 496px"
  },
]

export const TopActivities: React.FC = () => {
  
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(1140, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({ target, maxScrollLeft: 84, maxScrollRight: 2468, offsetLeft: 1230, offsetRight: 1141 })

  return (
    <div className={styles.topActivities}>
      <h2>Top 3 Activities in Australia</h2>

      <div ref={setStartPos} className={styles.cards} onScroll={handleScroll}>
        {data.map((card, index) => (
          <LastMinuteDealCard view="reversed" {...card} key={`${index}-card`} />
        ))}
        {data.map((card, index) => (
          <LastMinuteDealCard view="reversed" {...card} key={`${index}-card`} forCarousel={true} />
        ))}
        <LastMinuteDealCard view="reversed" {...data[0]} forCarousel={true} />
      </div>
    </div>
  )
}