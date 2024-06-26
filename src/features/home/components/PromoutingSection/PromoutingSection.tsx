import React from 'react'

import { CardsWrapper } from 'components'
import LazyLoad from 'react-lazyload'
import { circleScroll } from 'utils'
import * as images from './assets'
import styles from './PromoutingSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const PromoutingSection: React.FC<IProps> = ({ className }) => {
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(655, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({ target, maxScrollLeft: 57, maxScrollRight: 1366, offsetLeft: 716, offsetRight: 650 })

  const renderImg = (img: keyof typeof images.w320, forCarousel: boolean = false, key?: string) => (
    <LazyLoad key={key} height={300} offset={500}>
      <picture data-hidden={forCarousel}>
        <source media="(max-width: 767px)" srcSet={images.w320[img].src} />
        <source media="(max-width: 1024px)" srcSet={images.w1024[img].src} />
        <source media="(max-width: 1279px)" srcSet={images.w1280[img].src} />
        <source media="(max-width: 1920px)" srcSet={images.w1920[img]} />
        <img src={images.w1920[img as keyof typeof images.w320]} alt="promo" />
      </picture>
    </LazyLoad>
  )

  const renederImages = (forCarousel: boolean = false) =>
    Object.keys(images.w320).map((img: string) => renderImg(img as keyof typeof images.w320, forCarousel, img))

  return (
    <CardsWrapper className={className} title="Promoting the best of" linkTitle="Learn more">
      <div ref={setStartPos} className={styles.promoutingSection} onScroll={handleScroll}>
        {renederImages()}
        {renederImages(true)}
        {renderImg('p1', true)}
      </div>
    </CardsWrapper>
  )
}
