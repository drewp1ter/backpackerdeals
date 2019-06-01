import * as React from 'react'

import { Footer } from 'components/partials'
import { components as headerComponents } from 'features/header'

interface IProps {
  readonly children?: React.ReactNode
}

export class Page extends React.Component<IProps, IState> {

  render() {
    const { children } = this.props
    const { HeaderLayout } = headerComponents
    return (
      <div>
        <HeaderLayout />
        {children}
        <Footer />
      </div>
    )
  }
}
