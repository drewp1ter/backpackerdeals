import Head from 'next/head'
import React from 'react'

import { DealLayout } from 'features/deal/components'
import { Page } from 'features/page/components'

const Deal = () => (
  <Page headerTheme="dark">
    <Head>
      <title>Deal</title>
    </Head>
    <DealLayout />
  </Page>
)

export default Deal
