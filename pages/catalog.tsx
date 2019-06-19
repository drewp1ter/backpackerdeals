import React from 'react'

import { CatalogLayout } from 'features/catalog/components'
import { Page } from 'features/page/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark">
      <CatalogLayout />
    </Page>
  )
}

export default Catalog
