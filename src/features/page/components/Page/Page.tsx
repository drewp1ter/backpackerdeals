import * as React from 'react'
import LazyLoad from 'react-lazyload'
import { Footer, Header } from '..'

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
  readonly withoutFooter?: boolean
}

export const Page: React.FC<IProps> = ({ children, headerTheme, withoutFooter = false }) => {
  return (
    <>
      <Header theme={headerTheme}/>
      {children}
      {!withoutFooter && (
        <LazyLoad height={500} offset={300}>
          <Footer/>
        </LazyLoad>
      )}
    </>
  )
}


