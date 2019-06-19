import React from 'react'
import { Helmet } from 'react-helmet'

import { HomeLayout } from 'features/home/components'
import { Page } from 'features/page/components'

class Index extends React.Component {
  render = () => (
    <Page>
      <Helmet>
        <title>Backpackerdeals</title>
      </Helmet>
      <HomeLayout />
    </Page>
  )
}

export default Index
