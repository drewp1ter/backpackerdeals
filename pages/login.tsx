import React from 'react'

import { Login } from 'features/account/containers'
import { Page } from 'features/page/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark" withoutFooter={true}>
      <Login />
    </Page>
  )
}

export default Catalog
