import * as React from 'react'

import { Footer } from 'components/partials'

export interface IProps {
  readonly children?: React.ReactNode
}

export const Page: React.FC<IProps> = ({ children }) => (
  <div style={{background: 'url(\'/static/Promo-pic.jpg\'' }}>
    {children}
    <Footer />
  </div>
)
