export interface ICircleScrollProps {
  readonly target : any
  readonly maxScrollRight: number
  readonly maxScrollLeft: number
  readonly offsetRight: number
  readonly offsetLeft: number
}

export const circleScroll = ({ target, maxScrollRight, maxScrollLeft, offsetRight, offsetLeft }: ICircleScrollProps) => {
  // maxScrollRight = коордиата (scrollLeft + offsetWidth) с которой перескакивать
  // offsetRight = прокрутить на нужное метсо и maxScrollRight - offsetWidth - scrollLeft
  // maxScrollLeft = координата scrollLeft с которой перескакивать
  // offsetLeft = координата scrollLeft куда перескачить
  const { scrollLeft, offsetWidth } = target
  if (scrollLeft + offsetWidth >= maxScrollRight) {
    target.scrollTo(maxScrollRight - offsetWidth - offsetRight, 0)
  }
  if (scrollLeft <= maxScrollLeft) {
    target.scrollTo(offsetLeft, 0)
  }
  // console.log(scrollLeft + ' ' + offsetWidth + ' ' + (scrollLeft + offsetWidth))
}

export const isServer = () => {
  try {
    return !window
  } catch (e) {
    return true
  }
}

export const getOffset = () => {
  try {
    return screen.height * 2
  } catch (e) {
    return 600
  }
}