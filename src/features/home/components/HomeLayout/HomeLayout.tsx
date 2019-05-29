import * as React from 'react'

import { Page } from 'components/base'

import { ActivitiesToursThings, AuthenticReviews, InsprationInstagram, LastMinuteDeal } from '..'

const HomeLayout: React.FC = () => (
  <Page>
    <InsprationInstagram />
    <AuthenticReviews />
    <ActivitiesToursThings />
    <LastMinuteDeal />
  </Page>
)

export default HomeLayout
