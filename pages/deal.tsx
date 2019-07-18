import React from 'react'
import { Helmet } from 'react-helmet'

import { DealLayout } from 'features/deal/components'
import { Page } from 'features/page/components'

const Deal = () => (
  <Page>
    <Helmet>
      <title>Deal</title>
    </Helmet>
    <DealLayout />
  </Page>
)

export default Deal