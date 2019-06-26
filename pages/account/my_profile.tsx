import React from 'react'

import { MyProfile } from 'features/account/containers'
import { Page } from 'features/page/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark">
      <MyProfile />
    </Page>
  )
}

export default Catalog
