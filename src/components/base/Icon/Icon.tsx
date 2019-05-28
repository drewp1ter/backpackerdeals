import * as React from 'react'

import svg from './svg'

const sizes = {
  md: 64
}

export interface IProps {
  readonly name: keyof typeof svg
  readonly size?: keyof typeof sizes
  readonly className?: string
}

export const Icon: React.FC<IProps> = ({ name, className, size = 'md' }) => {
  return <img className={className} width={sizes[size]} height={sizes[size]} src={svg[name]} />
}