import * as React from 'react'

import { CardsWrapper } from '..'
import * as images from './assets'
import styles from './PromoutingSection.module.scss'

export const PromoutingSection: React.FC = () => {
  const renederImages = () =>
    Object.keys(images.w320).map((img: string) => {
      return (
        <picture key={img}>
          <source media="(max-width: 767px)" srcSet={images.w320[img as keyof typeof images.w320].src} />
          <source media="(max-width: 1024px)" srcSet={images.w1024[img as keyof typeof images.w320].src} />
          <source media="(max-width: 1280px)" srcSet={images.w1280[img as keyof typeof images.w320].src} />
          <source media="(max-width: 1920px)" srcSet={images.w1920[img as keyof typeof images.w320]} />
          <img src={images.w1920[img as keyof typeof images.w320]} alt="promo" />
        </picture>
      )
    })

  return (
    <CardsWrapper title="Promoting the best of" linkTitle="Learn more">
      <div className={styles.promoutingSection}>{renederImages()}</div>
    </CardsWrapper>
  )
}
