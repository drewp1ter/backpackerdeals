import React from 'react'

import styles from './MostPopular.module.scss'

export interface IPlace {
  img?: string;
  title: string;
}

export interface IProps {
  readonly places: IPlace[]
  readonly title: string
  readonly theme?: 'mobile'
}

export const MostPopular: React.FC<IProps> = ({ places, title, theme }) => {

  const renderPlaces = () => places && places.map((place, idx) => place.img ? (
    <div key={`${place.title}-${idx}`} className={styles.withImg}>
      <img src={place.img} alt="place" />
      <h6>{place.title}</h6>
      <div />
    </div>
  ) : (
    <h6 key={`${place.title}-${idx}`} className={styles.withoutImg}>{place.title}</h6>
  ))

  return (
    <div data-theme={theme} className={styles.root}>
      <h5>{title}</h5>
      <div className={styles.places}>
        {renderPlaces()}
      </div>
    </div>
  )
}