import * as React from 'react'
import LazyLoad from 'react-lazyload'
import { getOffset } from 'utils'
import { Footer, Header, InstagramSection } from '..'

import styles from './Page.module.scss'

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
  readonly withoutFooter?: boolean
  readonly withInstagramCards?: boolean
}

export const Page: React.FC<IProps> = ({ children, headerTheme, withoutFooter = false, withInstagramCards = false }) => {
  return (
    <>
      <Header theme={headerTheme} />
      {children}
      {withInstagramCards && (
        <LazyLoad height={300} offset={getOffset()}>
          <InstagramSection className={styles.instagramCards} />
        </LazyLoad>
      )}
      {!withoutFooter && <Footer />}
    </>
  )
}
