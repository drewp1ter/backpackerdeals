import * as React from 'react'

import { Footer } from 'components/partials'
import { components as headerComponents } from 'features/header'

interface IProps {
  readonly children?: React.ReactNode
}

export const Page: React.FC<IProps> = ({ children }) => {
  const { HeaderLayout } = headerComponents

  return (
    <div>
      <HeaderLayout />
      {children}
      <Footer />
    </div>
  )
}
