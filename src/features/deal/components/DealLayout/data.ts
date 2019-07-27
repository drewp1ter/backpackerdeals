import { IProps as IDealCardProps } from 'components/DealCard/DealCard'

export const recommendedDeals: IDealCardProps[] = [
  {
    img: require('./assets/1.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
    sale: '30% OFF',
    saleType: 'topDeal',
    value: 1200,
    duration: '2 days, 1 night',
    likeable: 'short',
    rating: 4.5,
    exposeTime: {
      days: '02',
      hours: '10',
      minutes: '51',
    },
    sizes: '(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px',
  },
  {
    img: require('./assets/2.jpg?resize&sizes[]=232&sizes[]=256&sizes[]=368&sizes[]=272'),
    tourName: 'Kakadu 4WD Adventure',
    price: 900,
    location: 'Australia',
    sale: 'AUD$300',
    saleType: undefined,
    value: 1200,
    duration: '2 days, 1 night',
    rating: 4.5,
    likeable: 'short',
    exposeTime: undefined,
    sizes: '(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px',
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
    likeable: 'short',
    rating: 4.5,
    exposeTime: undefined,
    sizes: '(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px',
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
    likeable: 'short',
    rating: 4.5,
    exposeTime: undefined,
    sizes: '(max-width: 767px) 272px, (max-width: 1024px) 232px, (max-width: 1279px) 256px, 368px',
  },
]
