export interface ICircleScrollProps {
  readonly target : any
  readonly maxScrollRight: number
  readonly maxScrollLeft: number
  readonly offsetRight: number
  readonly offsetLeft: number
}

export const circleScroll = ({ target, maxScrollRight, maxScrollLeft, offsetRight, offsetLeft }: ICircleScrollProps) => {
  const { scrollLeft, offsetWidth } = target
  if (scrollLeft + offsetWidth >= maxScrollRight) {
    target.scrollTo(maxScrollRight - offsetWidth - offsetRight, 0)
  }
  if (scrollLeft <= maxScrollLeft) {
    target.scrollTo(offsetLeft, 0)
  }
  // console.log(scrollLeft + ' ' + offsetWidth + ' ' + (scrollLeft + offsetWidth))
}

export const getOffset = () => {
  try {
    return screen.height
  } catch (e) {
    return 600
  }
}