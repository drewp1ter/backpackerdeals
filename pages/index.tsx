import * as React from 'react'

import { HomeLayout } from 'features/home/components'
import { Page } from 'features/page/containers'

class Index extends React.Component {
  render = () => (
    <Page>
      <HomeLayout />
    </Page>
  )
}

export default Index
