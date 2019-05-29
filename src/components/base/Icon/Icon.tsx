import * as React from 'react'

import images from './assets'

const sizes = {
  md: 64
}

export interface IProps {
  readonly name: keyof typeof images
  readonly size?: keyof typeof sizes
  readonly className?: string
}

export const Icon: React.FC<IProps> = ({ name, className, size = 'md' }) => {
  return <img alt="" className={className} width={sizes[size]} height={sizes[size]} src={images[name]} />
}