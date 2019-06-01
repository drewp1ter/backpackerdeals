import * as React from 'react'

import { Footer, Header } from '../../components'

interface IProps {
  readonly children?: React.ReactNode
}

export const Page: React.FC<IProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
