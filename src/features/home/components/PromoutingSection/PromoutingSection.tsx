import * as React from 'react'

import { CardsWrapper } from 'components'
import { circleScroll } from 'utils'
import * as images from './assets'
import styles from './PromoutingSection.module.scss'

export const PromoutingSection: React.FC = () => {
  const setStartPos = (target: any) => {
    if (!target) {
      return
    }
    target.scrollTo(655, 0)
  }

  const handleScroll = ({ target }: any) =>
    circleScroll({ target, maxScrollLeft: 57, maxScrollRight: 1366, offsetLeft: 716, offsetRight: 650 })

  const renderImg = (img: keyof typeof images.w320, forCarousel: boolean = false, key?: string) => (
    <picture key={key} data-hidden={forCarousel}>
      <source media="(max-width: 767px)" srcSet={images.w320[img].src} />
      <source media="(max-width: 1024px)" srcSet={images.w1024[img].src} />
      <source media="(max-width: 1279px)" srcSet={images.w1280[img].src} />
      <source media="(max-width: 1920px)" srcSet={images.w1920[img]} />
      <img src={images.w1920[img as keyof typeof images.w320]} alt="promo" />
    </picture>
  )

  const renederImages = (forCarousel: boolean = false) =>
    Object.keys(images.w320).map((img: string) => renderImg(img as keyof typeof images.w320, forCarousel, img))

  return (
    <CardsWrapper title="Promoting the best of" linkTitle="Learn more">
      <div ref={setStartPos} className={styles.promoutingSection} onScroll={handleScroll}>
        {renederImages()}
        {renederImages(true)}
        {renderImg('p1', true)}
      </div>
    </CardsWrapper>
  )
}
