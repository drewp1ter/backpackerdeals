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
  readonly onClick?: () => void
}

export const Icon: React.FC<IProps> = ({ name, className, size, alt = 'icon', onClick }) =>
  size ? (
    <img alt={alt} onClick={onClick} className={className} width={sizes[size]} height={sizes[size]} src={images[name]} />
  ) : (
    <img alt={alt} onClick={onClick} className={className} src={images[name]} />
  )
