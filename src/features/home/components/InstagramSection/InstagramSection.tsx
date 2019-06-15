import React from 'react'

import { CardsWrapper } from '..'
import * as images from './assets'
import styles from './InstagramSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const InstagramSection: React.FC<IProps> = ({ className }) => {
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(810, 0)
  }

  const renderCard = (img: keyof typeof images.w320, key?: string, forCarousel: boolean = false) => (
    <div key={key} className={styles.instagramCard} data-hidden={forCarousel}>
      <picture>
        <source media="(max-width: 767px)" srcSet={images.w320[img].src} />
        <source media="(max-width: 1024px)" srcSet={images.w1024[img].src} />
        <source media="(max-width: 1280px)" srcSet={images.w1280[img].src} />
        <source media="(max-width: 1920px)" srcSet={images.w1920[img]} />
        <img src={images.w1920[img]} alt="Instagram" />
      </picture>
    </div>
  )

  const renderCards = (forCarousel: boolean = false) =>
    Object.keys(images.w320).map((img: string) => renderCard(img as keyof typeof images.w320, img, forCarousel))

  const handleScroll = ({ target }: any) => {
    const { scrollLeft, offsetWidth } = target
    const maxScrollRight = 1680
    const maxScrollLeft = 514
    const offsetRight = 812
    const offsetLeft = 1325
    if (scrollLeft + offsetWidth >= maxScrollRight) {
      target.scrollTo(maxScrollRight - offsetWidth - offsetRight, 0)
    }
    if (scrollLeft + offsetWidth < maxScrollLeft) {
      target.scrollTo(offsetLeft - offsetWidth, 0)
    }
  }

  return (
    <CardsWrapper className={className} title="Inspiration from our instagram" linkTitle="Follow us">
      <div ref={setStartPos} onScroll={handleScroll} className={styles.instagramCards}>
        {renderCards()}
        {renderCards(true)}
        {renderCard('v1', 'card', true)}
      </div>
    </CardsWrapper>
  )
}
