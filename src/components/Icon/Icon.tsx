import * as React from 'react'

import classNames from 'classnames'

import styles from './Icon.module.scss'

import images from './assets'

const sizes = {
  md: 64,
}

export interface IProps {
  readonly name: keyof typeof images
  readonly size?: undefined | keyof typeof sizes
  readonly className?: string
  readonly alt?: string
  readonly onClick?: () => void
}

export const Icon: React.FC<IProps> = ({ name, className, size, alt = 'icon', onClick }) => (
  <img alt={alt} onClick={onClick} data-size={size} className={classNames(styles.icon, className)} src={images[name]} />
)
