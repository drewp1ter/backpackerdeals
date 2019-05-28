import * as React from 'react'

import { Footer } from 'components/partials'

export interface IProps {
  readonly children?: React.ReactNode
}

export const Page: React.FC<IProps> = ({
  children
}) => (
  <div>
    { children }
    <Footer />
  </div>
)