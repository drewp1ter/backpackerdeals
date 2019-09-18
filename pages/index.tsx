import React from 'react'

import { HomeLayout } from 'features/home/components'
import { Page } from 'features/page/components'

class Index extends React.Component {
  render = () => (
    <Page withInstagramCards={true}>
      <HomeLayout />
    </Page>
  )
}

export default Index
