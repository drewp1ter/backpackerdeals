import * as React from 'react'

import { CardsWrapper } from '..'
import images from './assets'
import styles from './PromoutingSection.module.scss'

export const PromoutingSection: React.FC = () => {
  const renederImages = () =>
    Object.entries(images).map((img: [string, any]) => (
      <img
        key={img[0]}
        srcSet={img[1].srcSet}
        sizes="(max-width: 767px) 109px, (max-width: 1024px) 131px, (max-width: 1280px) 144px, 209px"
        src={img[1].src}
        alt="promo"
      />
    ))

  return (
    <CardsWrapper title="Promoting the best of" linkTitle="Learn more">
      <div className={styles.promoutingSection}>{renederImages()}</div>
    </CardsWrapper>
  )
}
