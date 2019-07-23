import * as React from 'react'

import {
  ActivitiesSection,
  AuthenticSection,
  BookWithUsSection,
  LastMinuteDeal,
  PromoutingSection,
  TopDestinationsSection,
  TravelStoriesSection,
} from '..'

import { CardsWrapper } from 'components'

import { SearchTravelSection } from '../../containers'

export const HomeLayout: React.FC = () => {
  return (
    <>
      <SearchTravelSection />
      <BookWithUsSection />
      <TopDestinationsSection />
      <ActivitiesSection />
      <CardsWrapper title="Last Minute Deals" linkTitle="View all minute deals">
        <LastMinuteDeal />
      </CardsWrapper>
      <TravelStoriesSection />
      <AuthenticSection />
      <PromoutingSection />
    </>
  )
}
