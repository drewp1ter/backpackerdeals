import * as React from 'react'

import styles from './instagramCard.scss'

export interface IProps {
  img: string
}

const InstagramCard: React.FC<IProps> = ({ img }) => {
  return (
    <div className={styles.main}>
      <img src={img} />
    </div>
  )
}

export default InstagramCard