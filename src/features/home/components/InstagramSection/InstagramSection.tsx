import React from 'react'

import { CardsWrapper } from '..'
import images from './assets'
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

  const renderCard = (img: any, key?: string, forCarousel: boolean = false) => (
    <div key={key} className={styles.instagramCard} data-hidden={forCarousel}>
      <img
        srcSet={img.srcSet}
        sizes="(max-width: 767px) 128px, (max-width: 1024px) 152px, (max-width: 1280px) 169px, 240px"
        src={img.src}
        alt="Instagram card"
      />
    </div>
  )

  const renderCards = (forCarousel: boolean = false) =>
    Object.entries(images).map((img: [string, any]) => renderCard(img[1], img[0], forCarousel))

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
        {renderCards()}
        {renderCard(images.v1, 'card', true)}
      </div>
    </CardsWrapper>
  )
}
