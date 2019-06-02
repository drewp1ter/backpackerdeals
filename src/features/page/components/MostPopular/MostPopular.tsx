import React from 'react'

import styles from './MostPopular.module.scss'

export interface IPlace {
  img?: string;
  title: string;
}

export interface IProps {
  readonly places: IPlace[]
  readonly title: string
}

export const MostPopular: React.FC<IProps> = ({ places, title }) => {

  const renderPlaces = () => places && places.map(place => place.img ? (
    <div key={place.title} className={styles.withImg}>
      <img src={place.img} alt="" />
      <h6>{place.title}</h6>
      <div />
    </div>
  ) : (
    <h6 key={place.title} className={styles.withoutImg}>{place.title}</h6>
  ))

  return (
    <div className={styles.root}>
      <h5>{title}</h5>
      <div className={styles.places}>
        {renderPlaces()}
      </div>
    </div>
  )
}