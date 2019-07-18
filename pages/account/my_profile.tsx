import React from 'react'

import { ProfileLayout } from 'features/account/components'
import { MyProfile } from 'features/account/containers'
import { Page } from 'features/page/components'

class Catalog extends React.Component {
  render = () => (
    <Page headerTheme="dark">
      <ProfileLayout>
        <MyProfile />
      </ProfileLayout>
    </Page>
  )
}

export default Catalog
