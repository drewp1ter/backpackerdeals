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
  readonly handleClose?: () => void
}

export const MostPopular: React.FC<IProps> = ({ places, title, theme, handleClose }) => {

  const renderPlaces = () => places && places.map((place, idx) => place.img ? (
    <li onClick={handleClose} key={idx} className={styles.withImg}>
      <img src={place.img} alt="place" />
      <h6>{place.title}</h6>
      <div />
    </li>
  ) : (
    <li onClick={handleClose} key={idx} className={styles.withoutImg}><h6>{place.title}</h6></li>
  ))

  return (
    <div data-theme={theme} className={styles.root}>
      <h5>{title}</h5>
      <ul className={styles.places}>
        {renderPlaces()}
      </ul>
    </div>
  )
}