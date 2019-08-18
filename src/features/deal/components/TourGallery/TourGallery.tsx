import classNames from 'classnames'
import * as CSS from 'csstype'
import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import React, { RefObject } from 'react'
import { EventData, Swipeable } from 'react-swipeable'
import ResizeObserver from 'resize-observer-polyfill'
import styles from './TourGallery.module.scss'

import images from '../TourGallery/assets'

enum Direction {
  left = 'Left',
  right = 'Right',
}

const screenChangeEvents = ['fullscreenchange', 'MSFullscreenChange', 'mozfullscreenchange', 'webkitfullscreenchange']

export interface IItem {
  readonly original: string
  readonly thumbnail: string
  readonly srcSet?: string
  readonly sizes?: string
  readonly originalAlt?: string
  readonly originalTitle?: string
  readonly thumbnailAlt?: string
  readonly thumbnailTitle?: string
  readonly imageSet?: HTMLSourceElement[]
}

export interface IProps {
  readonly flickThreshold?: number
  readonly items: IItem[]
  readonly autoPlay?: boolean
  readonly lazyLoad?: boolean
  readonly infinite?: boolean
  readonly showPlayButton?: boolean
  readonly showFullscreenButton?: boolean
  readonly disableSwipe?: boolean
  readonly useBrowserFullscreen?: boolean
  readonly preventDefaultTouchmoveEvent?: boolean
  readonly startIndex: number
  readonly slideDuration?: number
  readonly slideInterval?: number
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
  readonly isFullscreen: boolean
  readonly isPlaying: boolean
  readonly isTransitioning: boolean
  readonly modalFullscreen: boolean
  readonly previousIndex: number
  readonly style: CSS.Properties
}

export class TourGallery extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    items: images,
    autoPlay: false,
    lazyLoad: false,
    infinite: true,
    showPlayButton: true,
    showFullscreenButton: true,
    disableSwipe: false,
    useBrowserFullscreen: true,
    preventDefaultTouchmoveEvent: false,
    flickThreshold: 0.4,
    stopPropagation: false,
    startIndex: 0,
    slideDuration: 450,
    swipingTransitionDuration: 0,
    slideInterval: 3000,
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

  private _unthrottledSlideToIndex: (index: number, event?: React.MouseEvent<HTMLAnchorElement>) => void
  private _lazyLoaded: boolean[]
  private _intervalId: number | null
  private _transitionTimer: number | null
  private _imageGallerySlideWrapper: RefObject<HTMLDivElement>
  private _imageGallery: RefObject<HTMLDivElement>
  private _thumbnailsWrapper: RefObject<HTMLDivElement>
  private _thumbnails: RefObject<HTMLUListElement>
  private _resizeObserver: ResizeObserver | null

  constructor(props: IProps) {
    super(props)

    this.state = {
      currentIndex: props.startIndex,
      thumbsTranslate: 0,
      offsetPercentage: 0,
      galleryWidth: 0,
      thumbnailsWrapperWidth: 0,
      isFullscreen: false,
      isPlaying: false,
      isTransitioning: false,
      modalFullscreen: false,
      previousIndex: 0,
      style: {},
    }

    // Used to update the throttle if slideDuration changes
    this._unthrottledSlideToIndex = this.slideToIndex
    this.slideToIndex = throttle(this._unthrottledSlideToIndex, props.slideDuration, { trailing: false })
    this._lazyLoaded = []
    this._intervalId = null
    this._transitionTimer = null
    this._imageGallery = React.createRef<HTMLDivElement>()
    this._thumbnailsWrapper = React.createRef<HTMLDivElement>()
    this._thumbnails = React.createRef<HTMLUListElement>()
    this._imageGallerySlideWrapper = React.createRef<HTMLDivElement>()
    this._resizeObserver = null
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    const itemsSizeChanged = prevProps.items.length !== this.props.items.length
    const itemsChanged = prevProps.items !== this.props.items
    const startIndexUpdated = prevProps.startIndex !== this.props.startIndex
    itemsSizeChanged && this._handleResize()
    prevState.currentIndex !== this.state.currentIndex && this._slideThumbnailBar(prevState.currentIndex)

    // if slideDuration changes, update slideToIndex throttle
    if (prevProps.slideDuration !== this.props.slideDuration) {
      this.slideToIndex = throttle(this._unthrottledSlideToIndex, this.props.slideDuration, { trailing: false })
    }
    if (this.props.lazyLoad && (!prevProps.lazyLoad || itemsChanged)) {
      this._lazyLoaded = []
    }

    startIndexUpdated || (itemsChanged && this.setState({ currentIndex: this.props.startIndex }))
  }

  componentDidMount() {
    const { autoPlay } = this.props
    autoPlay && this.play()
    window.addEventListener('keydown', this._handleKeyDown)
    this._onScreenChangeEvent()
    this._resizeObserver = new ResizeObserver(this._createResizeObserver)
    this._imageGallerySlideWrapper.current && this._resizeObserver.observe(this._imageGallerySlideWrapper.current)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyDown)
    this._offScreenChangeEvent()

    if (this._intervalId) {
      window.clearInterval(this._intervalId)
      this._intervalId = null
    }

    this._transitionTimer && window.clearTimeout(this._transitionTimer)

    if (this._resizeObserver && this._imageGallerySlideWrapper.current) {
      this._resizeObserver.unobserve(this._imageGallerySlideWrapper.current)
    }
    // this._createResizeObserver && this._createResizeObserver()
  }

  play() {
    if (!this._intervalId) {
      const { currentIndex } = this.state
      const { slideInterval, slideDuration, infinite } = this.props
      this.setState({ isPlaying: true })
      this._intervalId = window.setInterval(() => {
        if (!infinite && !this._canSlideRight()) {
          this.pause()
        } else {
          this.slideToIndex(currentIndex + 1)
        }
      }, Math.max(slideInterval || 0, slideDuration || 0))
    }
  }

  pause() {
    if (this._intervalId) {
      window.clearInterval(this._intervalId)
      this._intervalId = null
      this.setState({ isPlaying: false })
    }
  }

  fullScreen() {
    const gallery = this._imageGallery.current

    if (this.props.useBrowserFullscreen) {
      if (gallery!.requestFullscreen) {
        gallery!.requestFullscreen()
      } else {
        // fallback to fullscreen modal for unsupported browsers
        this.setState({ modalFullscreen: true })
      }
    } else {
      this.setState({ modalFullscreen: true })
    }
    this.setState({ isFullscreen: true })
  }

  exitFullScreen() {
    const { isFullscreen } = this.state
    const { useBrowserFullscreen } = this.props
    if (isFullscreen) {
      if (useBrowserFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else {
          // fallback to fullscreen modal for unsupported browsers
          this.setState({ modalFullscreen: false })
        }
      } else {
        this.setState({ modalFullscreen: false })
      }

      this.setState({ isFullscreen: false })
    }
  }

  slideToIndex = (index: number, event?: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentIndex, isTransitioning } = this.state

    if (!isTransitioning) {
      if (event && this._intervalId) {
        // user triggered event while ImageGallery is playing, reset interval
        this.pause()
        this.play()
      }

      const slideCount = this.props.items.length - 1
      let nextIndex = index

      if (index < 0) {
        nextIndex = slideCount
      } else if (index > slideCount) {
        nextIndex = 0
      }

      this.setState(
        {
          previousIndex: currentIndex,
          currentIndex: nextIndex,
          isTransitioning: nextIndex !== currentIndex,
          offsetPercentage: 0,
          style: {
            transition: `all ${this.props.slideDuration}ms ease-out`,
          },
        },
        this._onSliding
      )
    }
  }

  _onSliding = () => {
    const { isTransitioning } = this.state
    const { slideDuration } = this.props
    this._transitionTimer = window.setTimeout(() => {
      if (isTransitioning) {
        this.setState({ isTransitioning: !isTransitioning })
      }
    }, slideDuration && slideDuration + 50)
  }

  _handleScreenChange = () => {
    /*
      handles screen change events that the browser triggers e.g. esc key
    */
    this.setState({ isFullscreen: !!document.fullscreenElement })
  }

  _onScreenChangeEvent() {
    screenChangeEvents.map(eventName => {
      document.addEventListener(eventName, this._handleScreenChange)
    })
  }

  _offScreenChangeEvent() {
    screenChangeEvents.map(eventName => {
      document.removeEventListener(eventName, this._handleScreenChange)
    })
  }

  _toggleFullScreen = () => {
    if (this.state.isFullscreen) {
      this.exitFullScreen()
    } else {
      this.fullScreen()
    }
  }

  _togglePlay = () => {
    if (this._intervalId) {
      this.pause()
    } else {
      this.play()
    }
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
    const ESC_KEY = 27
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
      case ESC_KEY:
        if (this.state.isFullscreen && !this.props.useBrowserFullscreen) {
          this.exitFullScreen()
        }
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
    const { currentIndex, isTransitioning } = this.state
    let slideTo = currentIndex

    if ((this._sufficientSwipeOffset() || isFlick) && !isTransitioning) {
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

    this._unthrottledSlideToIndex(slideTo)
  }

  _sufficientSwipeOffset() {
    return Math.abs(this.state.offsetPercentage) > (this.props.swipeThreshold || 0)
  }

  _handleSwiping = ({ event, absX, dir }: EventData) => {
    const { disableSwipe, stopPropagation, preventDefaultTouchmoveEvent } = this.props
    if (disableSwipe) {
      return
    }
    const { galleryWidth, isTransitioning } = this.state
    const { swipingTransitionDuration } = this.props

    if (stopPropagation) {
      event.stopPropagation()
    }
    if (preventDefaultTouchmoveEvent && event.cancelable) {
      event.preventDefault()
    }
    if (!isTransitioning) {
      const side = dir === Direction.right ? 1 : -1

      let offsetPercentage = (absX / galleryWidth) * 100
      if (Math.abs(offsetPercentage) >= 100) {
        offsetPercentage = 100
      }

      const swipingTransition = {
        transition: `transform ${swipingTransitionDuration}ms ease-out`,
      }

      this.setState({
        offsetPercentage: side * offsetPercentage,
        style: swipingTransition,
      })
    } else {
      // don't move the slide
      this.setState({ offsetPercentage: 0 })
    }
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

  _slideThumbnailBar(previousIndex: number) {
    const { thumbsTranslate, currentIndex } = this.state
    if (this.state.currentIndex === 0) {
      this.setState({ thumbsTranslate: 0 })
    } else {
      const indexDifference = Math.abs(previousIndex - currentIndex)
      const scroll = this._getThumbsTranslate(indexDifference)
      if (scroll > 0) {
        if (previousIndex < currentIndex) {
          this.setState({ thumbsTranslate: thumbsTranslate - scroll })
        } else if (previousIndex > currentIndex) {
          this.setState({ thumbsTranslate: thumbsTranslate + scroll })
        }
      }
    }
  }

  _getThumbsTranslate(indexDifference: number) {
    const { thumbnailsWrapperWidth } = this.state
    // total scroll required to see the last thumbnail
    if ((this._thumbnails.current && this._thumbnails.current.scrollWidth <= thumbnailsWrapperWidth) || thumbnailsWrapperWidth <= 0) {
      return 0
    }
    const totalScroll = this._thumbnails.current && this._thumbnails.current.scrollWidth - thumbnailsWrapperWidth
    const totalThumbnails = this._thumbnails.current && this._thumbnails.current.children.length
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

  _shouldPushSlideOnInfiniteMode(index: number) {
    /*
      Push(show) slide if slide is the current slide, and the next slide
      OR
      The slide is going more than 1 slide left, or right, but not going from
      first to last and not going from last to first

      There is an edge case where if you go to the first or last slide, when they're
      not left, or right of each other they will try to catch up in the background
      so unless were going from first to last or vice versa we don't want the first
      or last slide to show up during our transition
    */
    return !this._slideIsTransitioning(index) || (this._ignoreIsTransitioning() && !this._isFirstOrLastSlide(index))
  }

  _slideIsTransitioning(index: number) {
    /*
    returns true if the gallery is transitioning and the index is not the
    previous or currentIndex
    */
    const { isTransitioning, previousIndex, currentIndex } = this.state
    const indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex)
    return isTransitioning && indexIsNotPreviousOrNextSlide
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

  _renderItem = (item: IItem) => {
    return (
      <div className={styles.imageGalleryImage}>
        {item.imageSet ? (
          <picture>
            {item.imageSet.map((source, index) => (
              <source key={index} media={source.media} srcSet={source.srcset} type={source.type} />
            ))}
            <img alt={item.originalAlt} src={item.original} />
          </picture>
        ) : (
          <img src={item.original} alt={item.originalAlt} srcSet={item.srcSet} sizes={item.sizes} title={item.originalTitle} />
        )}
      </div>
    )
  }

  _renderThumbInner = (item: IItem) => {
    return (
      <div className={styles.imageGalleryThumbnailInner}>
        <img src={item.thumbnail} alt={item.thumbnailAlt} title={item.thumbnailTitle} />
      </div>
    )
  }

  _onThumbnailClick = ({ currentTarget }: React.MouseEvent<HTMLLIElement>) => {
    this.slideToIndex(Number(currentTarget.dataset.idx))
  }

  _handleScrollThumbsLeft = () => {
    const { current } = this._thumbnailsWrapper
    current && current.scrollTo({ left: current.scrollLeft - current.offsetWidth - 50, behavior: 'smooth' })
  }

  _handleScrollThumbsRight = () => {
    const { current } = this._thumbnailsWrapper
    current && current.scrollTo({ left: current.scrollLeft + current.offsetWidth - 50, behavior: 'smooth' })
  }

  render() {
    const { currentIndex, isFullscreen, modalFullscreen, isPlaying, style } = this.state
    const { infinite, lazyLoad, className } = this.props
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

      const slideStyle = { ...this._getSlideStyle(index), ...style }
      const slide = (
        <div key={index} className={styles.imageGallerySlide} data-position={alignment} style={slideStyle}>
          {showItem ? this._renderItem(item) : <div style={{ height: '100%' }} />}
        </div>
      )

      if (infinite) {
        // don't add some slides while transitioning to avoid background transitions
        if (this._shouldPushSlideOnInfiniteMode(index)) {
          slides.push(slide)
        }
      } else {
        slides.push(slide)
      }

      thumbnails.push(
        <li
          key={index}
          role="button"
          aria-pressed={currentIndex === index}
          aria-label={`Go to Slide ${index + 1}`}
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
        <button
          type="button"
          className={styles.imageGalleryLeftNav}
          disabled={disableLeft}
          onClick={onClickLeft}
          aria-label="Previous Slide"
        />
        <button
          type="button"
          className={styles.imageGalleryRightNav}
          disabled={disableRight}
          onClick={onClickRight}
          aria-label="Next Slide"
        />
      </span>
    )

    const slideWrapper = (
      <div ref={this._imageGallerySlideWrapper} className={styles.imageGallerySlideWrapper}>
        <button
          type="button"
          className={styles.imageGalleryFullScreenButton}
          data-active={isFullscreen}
          onClick={this._toggleFullScreen}
          aria-label="Open Fullscreen"
        />
        <button
          type="button"
          className={styles.imageGalleryPlayButton}
          data-active={isPlaying}
          onClick={this._togglePlay}
          aria-label="Play or Pause Slideshow"
        />

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
              <div className={styles.imageGallerySlides}>{slides}</div>
            </Swipeable>,
          ]
        ) : (
          <div className={styles.imageGallerySlides}>{slides}</div>
        )}
      </div>
    )

    return (
      <div
        ref={this._imageGallery}
        className={classNames(styles.imageGallery, modalFullscreen && styles.fullscreenModal, className)}
        aria-live="polite"
      >
        <div className={styles.imageGalleryContent} data-fullscreen={isFullscreen}>
          {slideWrapper}
          <div className={styles.imageGalleryThumbnailsWrapper}>
            <div className={styles.imageGalleryThumbnails} ref={this._thumbnailsWrapper}>
              {renderNavButtons(this._handleScrollThumbsLeft, this._handleScrollThumbsRight, false, false)}
              <ul
                ref={this._thumbnails}
                className={styles.imageGalleryThumbnailsContainer}
                style={thumbnailStyle}
                aria-label="Thumbnail Navigation"
              >
                {thumbnails}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
