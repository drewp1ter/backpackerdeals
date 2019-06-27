import React from 'react'
import { Helmet } from 'react-helmet'

import { Page } from 'features/page/components'
import { DealLayout } from 'features/deal/components'

const Deal = () => (
  <Page>
    <Helmet>
      <title>Deal</title>
    </Helmet>
    <DealLayout />
  </Page>
)

export default Deal