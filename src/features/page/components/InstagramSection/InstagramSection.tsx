import React from 'react'

import { CardsWrapper } from 'components'
import { circleScroll } from 'utils'
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
    <li key={key} data-hidden={forCarousel}>
      <picture>
        <source media="(max-width: 767px)" srcSet={images.w320[img].src} />
        <source media="(max-width: 1024px)" srcSet={images.w1024[img].src} />
        <source media="(max-width: 1279px)" srcSet={images.w1280[img].src} />
        <source media="(max-width: 1920px)" srcSet={images.w1920[img]} />
        <img src={images.w1920[img]} alt="Instagram" />
      </picture>
    </li>
  )

  const renderCards = (forCarousel: boolean = false) =>
    Object.keys(images.w320).map((img: string) => renderCard(img as keyof typeof images.w320, img, forCarousel))

  const handleScroll = ({ target }: any) => circleScroll({ target, maxScrollRight: 1680, maxScrollLeft: 40, offsetRight: 812, offsetLeft: 852 })

  return (
    <CardsWrapper className={className} title="Inspiration from our instagram" linkTitle="Follow us">
      <ul ref={setStartPos} onScroll={handleScroll} className={styles.instagramCards}>
        {renderCards()}
        {renderCards(true)}
        {renderCard('v1', 'card', true)}
      </ul>
    </CardsWrapper>
  )
}
