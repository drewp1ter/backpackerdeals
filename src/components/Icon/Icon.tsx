import * as React from 'react'

import images from './assets'

const sizes = {
  md: 64,
}

export interface IProps {
  readonly name: keyof typeof images
  readonly size?: undefined | keyof typeof sizes
  readonly className?: string
  readonly alt?: string
}

export const Icon: React.FC<IProps> = ({ name, className, size, alt }) =>
  size ? (
    <img alt={alt} className={className} width={sizes[size]} height={sizes[size]} src={images[name]} />
  ) : (
    <img alt={alt} className={className} src={images[name]} />
  )
