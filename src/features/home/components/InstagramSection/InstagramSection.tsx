import * as React from 'react'

import { CardsWrapper } from '..'
import images from './assets'
import styles from './InstagramSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const InstagramSection: React.FC<IProps> = ({ className }) => {
  const renderCards = () =>
    Object.entries(images).map((img: [string, any]) => (
      <div key={img[0]} className={styles.instagramCard}>
        <img
          srcSet={img[1].srcSet}
          sizes="(max-width: 767px) 128px, (max-width: 1024px) 152px, (max-width: 1280px) 169px, 240px"
          src={img[1].src}
          alt="Instagram card"
        />
      </div>
    ))

  return (
    <CardsWrapper className={className} title="Inspiration from our instagram" linkTitle="Follow us">
      <div className={styles.instagramCards}>
        {renderCards()}
      </div>
    </CardsWrapper>
  )
}
