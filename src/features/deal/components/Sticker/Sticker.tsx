import classNames from 'classnames'
import React from 'react'

import styles from './Sticker.module.scss'

enum Variants {
  lastMinuteDeal = 'lastMinuteDeal',
  topDeal = 'topDeal',
  soldOut = 'soldOut',
}

export interface IProps {
  readonly variant: keyof typeof Variants
  readonly className?: string
}

export const Sticker: React.FC<IProps> = ({ className, variant }) => {
  const getText = () => {
    switch (variant) {
      case Variants.lastMinuteDeal:
        return 'Last Minute Deal'
      case Variants.topDeal:
        return 'Top Deal'
      case Variants.soldOut:
        return 'Sold out'
      default:
        ''
    }
  }

  return (
    <div className={classNames(styles.sticker, className)} data-variant={variant}>
      <p>{getText()}</p>
    </div>
  )
}
