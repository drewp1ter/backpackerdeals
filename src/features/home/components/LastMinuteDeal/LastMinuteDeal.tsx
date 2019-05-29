import * as React from 'react'

import './LastMinuteDeal.scss'

import { LastMinuteDealCard } from '../LastMinuteDealCard'

interface IProps {

}

const data = [
  { 
    img: "none", 
    tourName: "Kakadu 4WD Adventure", 
    price: 900, 
    country: "Australia", 
    sale: "30%", 
    saleType: "topDeal", 
    value: 1200, 
    duration: "2 days, 1 night", 
    rating: 4.5, 
    // exposeTime: {
    //   days: "02",
    //   hours: "10",
    //   minutes: "51"
    // }
  },
  {
    img: "none",
    tourName: "Kakadu 4WD Adventure", 
    price: 900, 
    country: "Australia", 
    sale: "AUD$300", 
    saleType: "", 
    value: 1200, 
    duration: "2 days, 1 night", 
    rating: 4.5, 
    // exposeTime: {
    //   days: "02",
    //   hours: "10",
    //   minutes: "51"
    // } 
  },
  { 
    img: "none", 
    tourName: "Kakadu 4WD Adventure", 
    price: 900, 
    country: "Australia", 
    sale: "30%", 
    saleType: "topDeal", 
    value: 1200, 
    duration: "2 days, 1 night", 
    rating: 4.5, 
    // exposeTime: {
    //   days: "02",
    //   hours: "10",
    //   minutes: "51"
    // } 
  },
  { 
    img: "none", 
    tourName: "Kakadu 4WD Adventure", 
    price: 900, 
    country: "Australia", 
    sale: "AUD$300", 
    saleType: "mostPopular", 
    value: 1200, 
    duration: "2 days, 1 night", 
    rating: 4.5, 
    // exposeTime: {
    //   days: "02",
    //   hours: "10",
    //   minutes: "51"
    // } 
  }
]

export const LastMinuteDeal: React.FC<IProps> = ({

}) => (
  <div className="last-minute-deal">
    {data.map((card, index) => <LastMinuteDealCard {...card} key={`${index}-card`} />)}
  </div>
)