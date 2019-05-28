import * as React from 'react'

import { Page } from 'components/base'

import { ActivitiesToursThings, AuthenticReviews, InsprationInstagram } from '..'

const HomeLayout: React.FC = () => (
  <Page>
    <InsprationInstagram />
    <AuthenticReviews />
    <ActivitiesToursThings />
  </Page>
)

export default HomeLayout
