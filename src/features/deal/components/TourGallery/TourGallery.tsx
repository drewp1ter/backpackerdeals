import classNames from 'classnames'
import debounce from 'lodash.debounce'

import React, { RefObject } from 'react'
import { EventData, Swipeable } from 'react-swipeable'
import YouTube from 'react-youtube'
import ResizeObserver from 'resize-observer-polyfill'
import styles from './TourGallery.module.scss'

import * as images from '../TourGallery/assets'

enum Direction {
  left = 'Left',
  right = 'Right',
}

export interface IImageSet {
  readonly media: string
  readonly srcSet: string
  readonly type?: string
}

export interface IItem {
  readonly original?: string
  readonly preview?: string
  readonly thumbnail: string
  readonly srcSet?: string
  readonly sizes?: string
  readonly originalAlt?: string
  readonly originalTitle?: string
  readonly thumbnailAlt?: string
  readonly thumbnailTitle?: string
  readonly imageSet?: IImageSet[]
  readonly videoId?: string
}

export interface IProps {
  readonly flickThreshold?: number
  readonly items: IItem[]
  readonly lazyLoad?: boolean
  readonly infinite?: boolean
  readonly disableSwipe?: boolean
  readonly preventDefaultTouchmoveEvent?: boolean
  readonly startIndex: number
  readonly swipeThreshold?: number
  readonly swipingTransitionDuration?: number
  readonly stopPropagation?: boolean
  readonly className?: string
}

export interface IState {
  readonly currentIndex: number
  readonly thumbsTranslate: number
  readonly offsetPercentage: number
  readonly galleryWidth: number
  readonly thumbnailsWrapperWidth: number
  readonly previousIndex: number
  readonly thumbsScrollOffset: number
}

export class TourGallery extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    items: images.gallery,
    lazyLoad: false,
    infinite: true,
    disableSwipe: false,
    preventDefaultTouchmoveEvent: false,
    flickThreshold: 0.4,
    stopPropagation: false,
    startIndex: 0,
    swipingTransitionDuration: 0,
    swipeThreshold: 30,
  }

  _createResizeObserver = debounce(entries => {
    if (!entries) {
      return
    }
    entries.forEach(() => {
      this._handleResize()
    })
  }, 300)

  private _lazyLoaded: boolean[]
  private _intervalId: number | null
  private _transitionTimer: number | null
  private _imageGallerySlideWrapper: RefObject<HTMLDivElement>
  private _imageGallery: RefObject<HTMLDivElement>
  private _thumbnailsWrapper: RefObject<HTMLDivElement>
  private _thumbnails: RefObject<HTMLUListElement>
  private _resizeObserver: ResizeObserver | null
  private _youtubeIFrames: any

  constructor(props: IProps) {
    super(props)

    this.state = {
      currentIndex: props.startIndex,
      thumbsTranslate: 0,
      offsetPercentage: 0,
      galleryWidth: 0,
      thumbnailsWrapperWidth: 0,
      previousIndex: 0,
      thumbsScrollOffset: 0,
    }

    this._lazyLoaded = []
    this._intervalId = null
    this._transitionTimer = null
    this._imageGallery = React.createRef<HTMLDivElement>()
    this._thumbnailsWrapper = React.createRef<HTMLDivElement>()
    this._thumbnails = React.createRef<HTMLUListElement>()
    this._imageGallerySlideWrapper = React.createRef<HTMLDivElement>()
    this._resizeObserver = null
    this._youtubeIFrames = []
  }

  componentDidUpdate(prevProps: IProps) {
    const itemsSizeChanged = prevProps.items.length !== this.props.items.length
    const itemsChanged = prevProps.items !== this.props.items
    const startIndexUpdated = prevProps.startIndex !== this.props.startIndex
    itemsSizeChanged && this._handleResize()

    if (this.props.lazyLoad && (!prevProps.lazyLoad || itemsChanged)) {
      this._lazyLoaded = []
    }

    startIndexUpdated || (itemsChanged && this.setState({ currentIndex: this.props.startIndex }))
  }

  componentDidMount() {
    window.addEventListener('keydown', this._handleKeyDown)
    this._resizeObserver = new ResizeObserver(this._createResizeObserver)
    this._imageGallerySlideWrapper.current && this._resizeObserver.observe(this._imageGallerySlideWrapper.current)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyDown)

    if (this._intervalId) {
      window.clearInterval(this._intervalId)
      this._intervalId = null
    }

    this._transitionTimer && window.clearTimeout(this._transitionTimer)

    if (this._resizeObserver && this._imageGallerySlideWrapper.current) {
      this._resizeObserver.unobserve(this._imageGallerySlideWrapper.current)
    }
  }

  slideToIndex = (index: number) => {
    const { currentIndex } = this.state
    Object.values(this._youtubeIFrames).forEach((iframe: any) => {
      iframe.playing && iframe.target.pauseVideo()
    })

    const slideCount = this.props.items.length - 1
    let nextIndex = index

    if (index < 0) {
      nextIndex = slideCount
    } else if (index > slideCount) {
      nextIndex = 0
    }

    const thumbsTranslate = nextIndex === 0 ? 0 : this._getThumbsTranslate(nextIndex) * -1

    this.setState({
      thumbsTranslate,
      previousIndex: currentIndex,
      currentIndex: nextIndex,
      offsetPercentage: 0,
      thumbsScrollOffset: 0,
    })
  }

  _handleResize = () => {
    const { currentIndex } = this.state
    this._imageGallery.current &&
      this.setState({
        galleryWidth: this._imageGallery.current.offsetWidth,
      })
    this._thumbnailsWrapper.current && this.setState({ thumbnailsWrapperWidth: this._thumbnailsWrapper.current.offsetWidth })
    // Adjust thumbnail container when thumbnail width or height is adjusted
    this.setState({ thumbsTranslate: -this._getThumbsTranslate(currentIndex) })
  }

  _handleKeyDown = (event: KeyboardEvent) => {
    const LEFT_ARROW = 37
    const RIGHT_ARROW = 39
    const key = event.keyCode || event.which

    switch (key) {
      case LEFT_ARROW:
        if (this._canSlideLeft() && !this._intervalId) {
          this._slideLeft()
        }
        break
      case RIGHT_ARROW:
        if (this._canSlideRight() && !this._intervalId) {
          this._slideRight()
        }
        break
    }
  }

  _handleOnSwiped = ({ event, dir, velocity }: EventData) => {
    const { disableSwipe, stopPropagation, flickThreshold } = this.props
    if (disableSwipe) {
      return
    }
    if (stopPropagation) {
      event.stopPropagation()
    }
    // don't swipe if user is scrolling
    const side = dir === Direction.left ? 1 : -1 // if it is RTL the direction is reversed
    const isFlick = velocity > (flickThreshold || 0)
    this._handleOnSwipedTo(side, isFlick)
  }

  _handleOnSwipedTo(side: number, isFlick: boolean) {
    const { currentIndex } = this.state
    let slideTo = currentIndex

    if (this._sufficientSwipeOffset() || isFlick) {
      slideTo += side
    }

    if (side < 0) {
      if (!this._canSlideLeft()) {
        slideTo = currentIndex
      }
    } else {
      if (!this._canSlideRight()) {
        slideTo = currentIndex
      }
    }

    this.slideToIndex(slideTo)
  }

  _sufficientSwipeOffset() {
    return Math.abs(this.state.offsetPercentage) > (this.props.swipeThreshold || 0)
  }

  _handleSwiping = ({ event, absX, dir }: EventData) => {
    const { disableSwipe, stopPropagation, preventDefaultTouchmoveEvent } = this.props
    if (disableSwipe) {
      return
    }
    const { galleryWidth } = this.state

    if (stopPropagation) {
      event.stopPropagation()
    }
    if (preventDefaultTouchmoveEvent && event.cancelable) {
      event.preventDefault()
    }
    const side = dir === Direction.right ? 1 : -1

    let offsetPercentage = (absX / galleryWidth) * 100
    if (Math.abs(offsetPercentage) >= 100) {
      offsetPercentage = 100
    }

    this.setState({
      offsetPercentage: side * offsetPercentage,
    })
  }

  _canNavigate() {
    return this.props.items.length >= 2
  }

  _canSlideLeft() {
    return this.props.infinite || this._canSlidePrevious()
  }

  _canSlideRight() {
    return this.props.infinite || this._canSlideNext()
  }

  _canSlidePrevious() {
    return this.state.currentIndex > 0
  }

  _canSlideNext() {
    return this.state.currentIndex < this.props.items.length - 1
  }

  _slideThumbnailBar(step: number) {
    const { thumbsScrollOffset, currentIndex } = this.state
    const nextThumbsScrollOffset = thumbsScrollOffset + step
    const nextIndex = currentIndex + nextThumbsScrollOffset
    const { items } = this.props
    let scroll = 0
    if (items.length > nextIndex && nextIndex > 0) {
      scroll = this._getThumbsTranslate(nextIndex)
      this.setState({ thumbsScrollOffset: nextThumbsScrollOffset, thumbsTranslate: scroll * -1 })
    } else if (nextIndex > 0) {
      scroll = this._getThumbsTranslate(items.length - 1)
      this.setState({ thumbsTranslate: scroll * -1 })
    } else {
      this.setState({ thumbsTranslate: 0 })
    }
  }

  _getThumbsTranslate(indexDifference: number) {
    const { thumbnailsWrapperWidth } = this.state
    const { items } = this.props
    const { current: thumbnails } = this._thumbnails
    // total scroll required to see the last thumbnail
    if ((thumbnails && thumbnails.scrollWidth <= thumbnailsWrapperWidth) || thumbnailsWrapperWidth <= 0) {
      return 0
    }
    const totalScroll = thumbnails && thumbnails.scrollWidth - thumbnailsWrapperWidth
    const totalThumbnails = thumbnails && items.length
    // scroll-x required per index change
    const perIndexScroll = totalThumbnails && totalScroll ? totalScroll / (totalThumbnails - 1) : 0
    return indexDifference * perIndexScroll
  }

  _getAlignmentClassName(index: number) {
    /*
      Necessary for lazing loading
    */
    const { currentIndex } = this.state
    let alignment = ''
    const leftClassName = 'left'
    const centerClassName = 'center'
    const rightClassName = 'right'

    switch (index) {
      case currentIndex - 1:
        alignment = leftClassName
        break
      case currentIndex:
        alignment = centerClassName
        break
      case currentIndex + 1:
        alignment = rightClassName
        break
    }

    if (this.props.items.length >= 3 && this.props.infinite) {
      if (index === 0 && currentIndex === this.props.items.length - 1) {
        // set first slide as right slide if were sliding right from last slide
        alignment = rightClassName
      } else if (index === this.props.items.length - 1 && currentIndex === 0) {
        // set last slide as left slide if were sliding left from first slide
        alignment = leftClassName
      }
    }

    return alignment
  }

  _isGoingFromFirstToLast() {
    const { currentIndex, previousIndex } = this.state
    const totalSlides = this.props.items.length - 1
    return previousIndex === 0 && currentIndex === totalSlides
  }

  _isGoingFromLastToFirst() {
    const { currentIndex, previousIndex } = this.state
    const totalSlides = this.props.items.length - 1
    return previousIndex === totalSlides && currentIndex === 0
  }

  _getTranslateXForTwoSlide(index: number) {
    // For taking care of infinite swipe when there are only two slides
    const { currentIndex, offsetPercentage, previousIndex } = this.state
    const baseTranslateX = -100 * currentIndex
    let translateX = baseTranslateX + index * 100 + offsetPercentage

    // keep track of user swiping direction
    let direction
    if (offsetPercentage > 0) {
      direction = 'left'
    } else if (offsetPercentage < 0) {
      direction = 'right'
    }

    // when swiping make sure the slides are on the correct side
    if (currentIndex === 0 && index === 1 && offsetPercentage > 0) {
      translateX = -100 + offsetPercentage
    } else if (currentIndex === 1 && index === 0 && offsetPercentage < 0) {
      translateX = 100 + offsetPercentage
    }

    if (currentIndex !== previousIndex) {
      // when swiped move the slide to the correct side
      if (previousIndex === 0 && index === 0 && offsetPercentage === 0 && direction === 'left') {
        translateX = 100
      } else if (previousIndex === 1 && index === 1 && offsetPercentage === 0 && direction === 'right') {
        translateX = -100
      }
    } else {
      // keep the slide on the correct slide even when not a swipe
      if (currentIndex === 0 && index === 1 && offsetPercentage === 0 && direction === 'left') {
        translateX = -100
      } else if (currentIndex === 1 && index === 0 && offsetPercentage === 0 && direction === 'right') {
        translateX = 100
      }
    }

    return translateX
  }

  _isFirstOrLastSlide(index: number) {
    const totalSlides = this.props.items.length - 1
    const isLastSlide = index === totalSlides
    const isFirstSlide = index === 0
    return isLastSlide || isFirstSlide
  }

  _ignoreIsTransitioning() {
    /*
      Ignore isTransitioning because were not going to sibling slides
      e.g. center to left or center to right
    */
    const { previousIndex, currentIndex } = this.state
    const totalSlides = this.props.items.length - 1
    // we want to show the in between slides transition
    const slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1
    const notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides)
    const notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0)

    return slidingMoreThanOneSlideLeftOrRight && notGoingFromFirstToLast && notGoingFromLastToFirst
  }

  _getSlideStyle(index: number) {
    const { currentIndex, offsetPercentage } = this.state
    const { infinite, items } = this.props
    const baseTranslateX = -100 * currentIndex
    const totalSlides = items.length - 1

    // calculates where the other slides belong based on currentIndex
    // if it is RTL the base line should be reversed
    let translateX = baseTranslateX + index * 100 + offsetPercentage

    if (infinite && items.length > 2) {
      if (currentIndex === 0 && index === totalSlides) {
        // make the last slide the slide before the first
        // if it is RTL the base line should be reversed
        translateX = -100 + offsetPercentage
      } else if (currentIndex === totalSlides && index === 0) {
        // make the first slide the slide after the last
        // if it is RTL the base line should be reversed
        translateX = 100 + offsetPercentage
      }
    }

    // Special case when there are only 2 items with infinite on
    if (infinite && items.length === 2) {
      translateX = this._getTranslateXForTwoSlide(index)
    }

    const translate = `translate3d(${translateX}%, 0, 0)`

    return {
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      transform: translate,
    }
  }

  _getThumbnailStyle() {
    let translate
    const { thumbsTranslate } = this.state

    translate = `translate3d(${thumbsTranslate}px, 0, 0)`

    return {
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      transform: translate,
    }
  }

  _slideLeft = () => {
    this.slideToIndex(this.state.currentIndex - 1)
  }

  _slideRight = () => {
    this.slideToIndex(this.state.currentIndex + 1)
  }

  _onThumbnailClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    this.slideToIndex(Number(currentTarget.dataset.idx))
  }

  _handleScrollThumbsLeft = () => {
    this._slideThumbnailBar(-5)
  }

  _handleScrollThumbsRight = () => {
    this._slideThumbnailBar(5)
  }

  _renderItem = (item: IItem) => {
    const onReady = ({ target }: any) => {
      if (item.videoId) {
        this._youtubeIFrames = {
          ...this._youtubeIFrames,
          [item.videoId]: {
            playing: false,
            target,
          },
        }
      }
    }

    const onPlay = () => {
      if (item.videoId) {
        this._youtubeIFrames = {
          ...this._youtubeIFrames,
          [item.videoId]: {
            ...this._youtubeIFrames[item.videoId],
            playing: true,
          },
        }
      }
    }

    const onPause = () => {
      if (item.videoId) {
        this._youtubeIFrames = {
          ...this._youtubeIFrames,
          [item.videoId]: {
            ...this._youtubeIFrames[item.videoId],
            playing: false,
          },
        }
      }
    }

    if (item.imageSet) {
      return (
        <div className={styles.imageGalleryImage}>
          <picture>
            {item.imageSet.map((source, index) => (
              <source key={index} media={source.media} srcSet={source.srcSet} type={source.type} />
            ))}
            <img alt={item.originalAlt} src={item.original} />
          </picture>
        </div>
      )
    }
    if (item.original) {
      return (
        <div className={styles.imageGalleryImage}>
          <img src={item.original} alt={item.originalAlt} srcSet={item.srcSet} sizes={item.sizes} title={item.originalTitle} />
        </div>
      )
    }
    if (item.videoId) {
      return (
        <div className={styles.iframeContainer}>
          <YouTube videoId={item.videoId} onReady={onReady} onPlay={onPlay} onPause={onPause} />
        </div>
      )
    }
  }

  _renderThumbInner = (item: IItem) => {
    return (
      <div className={styles.imageGalleryThumbnailInner}>
        <img src={item.thumbnail} alt={item.thumbnailAlt} title={item.thumbnailTitle} />
        {item.videoId && <i className="fab fa-youtube" />}
      </div>
    )
  }

  render() {
    const { currentIndex } = this.state
    const { lazyLoad, className } = this.props
    const thumbnailStyle = this._getThumbnailStyle()

    // tslint:disable-next-line:prefer-const
    let slides: JSX.Element[] = []
    // tslint:disable-next-line:prefer-const
    let thumbnails: JSX.Element[] = []

    this.props.items.forEach((item, index) => {
      const alignment = this._getAlignmentClassName(index)
      const renderThumbInner = this._renderThumbInner
      const showItem = !lazyLoad || alignment || this._lazyLoaded[index]

      if (showItem && lazyLoad && !this._lazyLoaded[index]) {
        this._lazyLoaded[index] = true
      }

      const slideStyle = this._getSlideStyle(index)
      const slide = (
        <li key={index} className={styles.imageGallerySlide} data-position={alignment} style={slideStyle}>
          {showItem ? this._renderItem(item) : <div style={{ height: '100%' }} />}
        </li>
      )

      slides.push(slide)

      thumbnails.push(
        <li
          key={index}
          data-pressed={currentIndex === index}
          className={styles.imageGalleryThumbnail}
          data-idx={index}
          onClick={this._onThumbnailClick}
        >
          {renderThumbInner(item)}
        </li>
      )
    })

    const renderNavButtons = (onClickLeft: () => void, onClickRight: () => void, disableLeft: boolean, disableRight: boolean) => (
      <span>
        <button className={styles.imageGalleryLeftNav} disabled={disableLeft} onClick={onClickLeft} />
        <button className={styles.imageGalleryRightNav} disabled={disableRight} onClick={onClickRight} />
      </span>
    )

    const slideWrapper = () => {
      const { currentIndex } = this.state
      const { items } = this.props
      return (
        <div
          ref={this._imageGallerySlideWrapper}
          data-hide-controls={!!items[currentIndex].videoId}
          className={styles.imageGallerySlideWrapper}
        >
          <div className={styles.toSell}>
            <div className={styles.toSellIcon}>
              <img src={images.cup} alt="sell" />
            </div>
            <div>
              Likely
              <br /> To Sell Out
            </div>
          </div>

          {this._canNavigate() ? (
            [
              <React.Fragment key="navigation">
                {renderNavButtons(this._slideLeft, this._slideRight, !this._canSlideLeft(), !this._canSlideRight())}
              </React.Fragment>,
              <Swipeable
                className={styles.imageGallerySwipe}
                key="swipeable"
                delta={0}
                onSwiping={this._handleSwiping}
                onSwiped={this._handleOnSwiped}
              >
                <ul className={styles.imageGallerySlides}>{slides}</ul>
              </Swipeable>,
            ]
          ) : (
            <ul className={styles.imageGallerySlides}>{slides}</ul>
          )}
        </div>
      )
    }

    return (
      <div ref={this._imageGallery} className={classNames(styles.imageGallery, className)}>
        <div className={styles.imageGalleryContent}>
          {slideWrapper()}
          <div className={styles.imageGalleryThumbnailsWrapper}>
            <div className={styles.imageGalleryThumbnails} ref={this._thumbnailsWrapper}>
              {renderNavButtons(this._handleScrollThumbsLeft, this._handleScrollThumbsRight, false, false)}
              <ul ref={this._thumbnails} className={styles.imageGalleryThumbnailsContainer} style={thumbnailStyle}>
                {thumbnails}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
