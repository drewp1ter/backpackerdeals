import Head from 'next/head'
import React from 'react'

import { Page } from 'features/page/components'
import { SearchLayout } from 'features/search/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark">
      <Head>
        <title>Search</title>
      </Head>
      <SearchLayout />
    </Page>
  )
}

export default Catalog
