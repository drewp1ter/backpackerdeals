import * as React from 'react'

import { AuthenticCard } from 'components'
import { HomeLayout } from 'features/home/components'

class Index extends React.Component {
  render = () => (
    <div>
      <HomeLayout />
      <AuthenticCard
        title="Easy and convenient booking"
        body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
        sign="Megan S."
        date="24.05.2012"
      />
    </div>
  )
}

export default Index
