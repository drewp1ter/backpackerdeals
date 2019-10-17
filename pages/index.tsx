import Head from 'next/head'
import React from 'react'

import { HomeLayout } from 'features/home/components'
import { Page } from 'features/page/components'

class Index extends React.Component {
  render = () => (
    <Page withInstagramCards={true}>
      <Head>
        <title>Backpacker Deals</title>
      </Head>
      <HomeLayout />
    </Page>
  )
}

export default Index
