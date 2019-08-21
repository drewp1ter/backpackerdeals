import React from 'react'
import { Helmet } from 'react-helmet'

import { NorthernTerritoryLayout } from 'features/northern_territory/components/NorthernTerritoryLayout'
import { Page } from 'features/page/components'

const Northern = () => (
  <Page headerTheme="dark">
    <Helmet>
      <title>Northern Territory</title>
    </Helmet>
    <NorthernTerritoryLayout />
  </Page>
)

export default Northern
