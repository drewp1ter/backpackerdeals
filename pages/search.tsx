import React from 'react'

import { Page } from 'features/page/components'
import { SearchLayout } from 'features/search/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark">
      <SearchLayout />
    </Page>
  )
}

export default Catalog
